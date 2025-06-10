<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CRUDRoleController extends Controller
{
    public function ShowDashboardRole(Request $request)
    {
        $search = $request->get('search'); // Ambil parameter 'search'

        if ($search) {
            // Filter data berdasarkan nama role
            $role = Role::with(['permissions' => function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            }])->where('name', 'like', '%' . $search . '%')->get();
        } else {
            // Ambil semua role beserta permissions
            $role = Role::with('permissions')->get();
        }

        return view('dashboardAdministrator.dashboardRole.daftarRole', compact('role'));
    }

    public function ShowFormAddRole()
    {
        $permission = Permission::all();

        return view('dashboardAdministrator.dashboardRole.FormAddRole', compact('permission'));
    }

    public function AddRole(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'roleName'     => 'required',
            'roleAccess'   => 'required|array',
            'roleAccess.*' => 'exists:permissions,name',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $existingRole = Role::where('name', $request->roleName)->first();

        if ($existingRole) {
            return redirect()->back()->withInput()->with('error', 'Nama role tersebut sudah digunakan');
        }

        $roles = Role::firstOrCreate(['name' => $request->roleName]);
        $roles->syncPermissions($request->roleAccess);

        return redirect()->route('ShowDashboardRole')->with('success', 'Berhasil menambahkan role');
    }

    public function ShowFormEditRole($id)
    {
        $role        = Role::findById($id);
        $permissions = Permission::all();

        return view('dashboardAdministrator.dashboardRole.FormEditRole', compact('role', 'permissions'));
    }

    public function EditRole(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'roleName'     => 'required',
            'roleAccess'   => 'required|array',
            'roleAccess.*' => 'exists:permissions,name',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        try {
            $role = Role::findOrFail($id);

            $validateData = $validator->validate();

            $role->name = $validateData['roleName'];
            $role->syncPermissions($request->roleAccess);

            $role->save();

            return redirect()->route('ShowDashboardRole')->with('success', 'Berhasil Update Role');

        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'failed update :' . $e->getMessage());
        }
    }

    public function DeleteRole($id)
    {
        $role = Role::find($id);

        if (! $role) {
            return redirect()->route('ShowDashboardRole')->with('error', 'Role tidak ditemukan');
        }

        $role->delete();

        return redirect()->route('ShowDashboardRole')->with('success', 'Berhasil Menghapus Role');
    }
}
