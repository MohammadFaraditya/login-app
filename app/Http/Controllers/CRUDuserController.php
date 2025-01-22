<?php
namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CRUDuserController extends Controller
{
    public function ShowFormAddUser()
    {
        $role = Role::all();
        return view('FormAddUser', compact('role'));
    }

    public function AddUser(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'nameUser'     => 'required',
            'email'        => 'required',
            'selectRole'   => 'required|array',    // Pastikan selectRole adalah array
            'selectRole.*' => 'exists:roles,name', // Pastikan setiap role ada di database
            'password'     => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        // Cek apakah username sudah ada di database
        $existingUser = User::where('email', $request->email)->first();
        if ($existingUser) {
            // Jika username sudah ada, kembalikan dengan pesan error
            return redirect()->back()->withInput()->with('error', 'Email tersebut sudah dipakai, silakan gunakan email lain.');
        }

        // Siapkan data untuk disimpan
        $data['id']       = 'AST-' . time() . '-' . rand(1000, 9999);
        $data['name']     = $request->nameUser;
        $data['email']    = $request->email;
        $data['password'] = Hash::make($request->password);

        // Buat pengguna baru
        $user = User::create($data);

        // Menangani assign multiple role
        foreach ($request->selectRole as $roleName) {
            $role = Role::where('name', $roleName)->first();
            if ($role) {
                $user->assignRole($roleName); // Menambahkan role ke user
            }
        }

        return redirect('dashboard')->with('success', 'User berhasil ditambahkan!');
    }

    public function DeleteUser($id)
    {
        // Cari user berdasarkan ID
        $user = User::find($id);
        if (! $user) {
            return redirect()->route('dashboard')->with('error', 'User tidak ditemukan.');
        }

        // Hapus hubungan user dengan role di tabel pivot (model_has_roles)
        RoleUser::where('model_id', $id)->delete();

        // Hapus user
        $user->delete();

        return redirect()->route('dashboard')->with('success', 'User berhasil dihapus.');
    }

}
