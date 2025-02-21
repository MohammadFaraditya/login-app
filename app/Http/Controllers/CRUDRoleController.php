<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class CRUDRoleController extends Controller
{
    public function ShowDashboardRule(Request $request)
    {
        $search = $request->get('search'); // Ambil parameter 'search'

        if ($search) {
            // Filter data berdasarkan username, email, atau role
            $role = Role::where('name', 'like', '%' . $search . '%')->get();
        } else {
            // Jika parameter 'search' kosong, ambil semua data
            $role = Role::all();
        }

        $permissions = [];
        foreach ($role as $role) {
            $permissions[$role->name] = $role->permissions;
        }

        return view('dashboardAdministrator.dashboardRole.daftarRole', compact('role', 'permissions'));
    }
}
