<?php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Cek apakah role sudah ada
        $role_Admin = Role::firstOrCreate(['name' => 'administrator']);
        $role_Staff = Role::firstOrCreate(['name' => 'staff']);

        // Cek apakah permission sudah ada
        $permission_dashboard              = Permission::firstOrCreate(['name' => 'view_dashboard']);
        $permission_crudUser               = Permission::firstOrCreate(['name' => 'CRUD_User']);
        $permission_tracking_kinerja_sales = Permission::firstOrCreate(['name' => 'view_tracking_kinerja_sales', 'table' => 'https://prod-apsoutheast-a.online.tableau.com/t/asiatop/views/TryRevisiINA-TKinerjaSales/Dashboard_P_RSM_INA']);

        // Memberikan permission ke role
        $role_Admin->syncPermissions([$permission_dashboard, $permission_crudUser]);
        $role_Staff->syncPermissions([$permission_tracking_kinerja_sales]);

        // Mengambil user dengan name 'itasiatop' atau membuatnya jika tidak ada
        $admin = User::where('username', 'itasiatop')->first();

                                             // Tambahkan role ke admin
        $admin->assignRole('administrator'); // Gunakan assignRole

        // Mengambil semua user selain admin
        $staff = User::where('username', '!=', 'itasiatop')->get();

        // Memberikan role 'staff' ke setiap user selain admin
        foreach ($staff as $user) {
            $user->assignRole('staff'); // Gunakan assignRole untuk menambahkan role tanpa mengganti yang ada
        }
    }
}
