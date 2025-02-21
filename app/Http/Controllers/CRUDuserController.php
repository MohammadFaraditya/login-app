<?php
namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CRUDuserController extends Controller
{
    public function ShowFormAddUser()
    {
        $role = Role::all();
        return view('dashboardAdministrator.dashboardUser.FormAddUser', compact('role'));
    }

    public function AddUser(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'username'     => 'required',
            'selectRole'   => 'required|array',    // Pastikan selectRole adalah array
            'selectRole.*' => 'exists:roles,name', // Pastikan setiap role ada di database
            'password'     => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        // Cek apakah username sudah ada di database
        $existingUser = User::where('username', $request->username)->first();
        if ($existingUser) {
            // Jika username sudah ada, kembalikan dengan pesan error
            return redirect()->back()->withInput()->with('error', 'Username tersebut sudah dipakai, silakan gunakan username lain.');
        }

        // Siapkan data untuk disimpan
        $data['id']       = 'AST-' . time() . '-' . rand(1000, 9999);
        $data['username'] = $request->username;
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

        return redirect()->route('dashboard')->with('success', 'User berhasil ditambahkan!');
    }

    public function DeleteUser($id)
    {
        // Cek apakah user ada
        $user = User::find($id);
        if (! $user) {
            return redirect()->route('dashboard')->with('error', 'User tidak ditemukan.');
        }

        // Hapus user
        $user->delete();

        return redirect()->route('dashboard')->with('success', 'User berhasil dihapus.');
    }

    public function ShowFormEditUser($id)
    {
        $user = User::findOrFail($id); // Ambil data user berdasarkan ID
        $role = Role::all();           // Ambil semua data role, jika ada model Role

        return view('dashboardAdministrator.dashboardUser.FormEditUser', compact('user', 'role'));
    }

    public function EditUser(Request $request, $id)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'username'     => 'required',
            'selectRole'   => 'required|array',    // Pastikan selectRole adalah array
            'selectRole.*' => 'exists:roles,name', // Pastikan setiap role ada di database
            'password'     => 'nullable|min:6',    // Password bersifat opsional
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        try {
            // Ambil user berdasarkan ID
            $user = User::findOrFail($id);

            // Ambil data yang sudah divalidasi
            $validatedData = $validator->validated();

            // Update data user
            $user->username = $validatedData['username'];

            // Update password jika diisi
            if (! empty($validatedData['password'])) {
                $user->password = bcrypt($validatedData['password']);
            }

            // Ambil role_id berdasarkan nama role yang dipilih
            $roleIds = Role::whereIn('name', $validatedData['selectRole'])
                ->pluck('id'); // Ambil hanya kolom 'id'

                                            // Sinkronisasi role berdasarkan ID
            $user->roles()->sync($roleIds); // Sinkronisasi dengan ID role

            // Simpan perubahan
            $user->save();

            // Redirect dengan pesan sukses
            return redirect()->route('dashboard')->with('success', 'User updated successfully!');
        } catch (\Exception $e) {
            // Tangani error dan redirect dengan pesan error
            return redirect()->back()->with('error', 'Failed to update user: ' . $e->getMessage());
        }
    }

}
