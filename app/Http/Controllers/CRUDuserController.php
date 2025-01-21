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
        return view('FormAddUser', compact('role'));
    }

    public function AddUser(Request $request)
    {
        // Validasi input tanpa validasi unik
        $validator = Validator::make($request->all(), [
            'username'   => 'required',
            'selectRole' => 'required',
            'password'   => 'required|min:6',
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

                                          // Assign role ke user
        $roleName = $request->selectRole; // Role dari input
        $role     = Role::where('name', $roleName)->first();

        if ($role) {
            $user->assignRole($roleName); // Memberikan role ke user
        } else {
            return redirect()->back()->with('error', 'Role tidak ditemukan!');
        }

        return redirect('dashboard')->with('success', 'User berhasil ditambahkan!');
    }
}
