<?php
namespace App\Http\Controllers;

use App\Models\Sheet;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class TableauController extends Controller
{
    // Method untuk mengambil role dan permission yang dimiliki user
    private function getUserRolesAndPermissions()
    {
        $user        = Auth::user();
        $roles       = $user->getRoleNames();
        $permissions = $user->getPermissionsViaRoles();
        return compact('user', 'roles', 'permissions');
    }

    // Method untuk membuat JWT Token
    private function createJWTToken($user)
    {
        $connectedAppClientId  = env('CONNECTED_APP_CLIENT_ID');
        $connectedAppSecretKey = env('CONNECTED_APP_SECRET_KEY');
        $connectedAppSecretId  = env('CONNECTED_APP_SECRET_ID');
        $user                  = env('USER');

        // Membuat JWT
        $payload = [
            'iss' => $connectedAppClientId,                    // Issuer: Client ID
            'exp' => Carbon::now()->addMinutes(10)->timestamp, // Expiration time (10 menit)
            'jti' => (string) \Str::uuid(),                    // JWT ID, menggunakan UUID
            'aud' => 'tableau',                                // Audience
            'sub' => $user,                                    // Subject (user)
            'scp' => ['tableau:views:embed'],                  // Scope
        ];

        return JWT::encode($payload, $connectedAppSecretKey, 'HS256', null, [
            'kid' => $connectedAppSecretId, // Key ID
            'iss' => $connectedAppClientId, // Issuer
        ]);
    }

    public function ShowHomeMenuTableAU()
    {
        $userData        = $this->getUserRolesAndPermissions();
        $permissionId    = $userData['permissions']->pluck('id')->toArray();
        $permissionsLink = Permission::whereIn('id', $permissionId)->get();
        return view('homeMenu', compact('permissionsLink'));
    }

    // Akses tableAu pertama
    public function ShowHomeTableAU()
    {
        $userData     = $this->getUserRolesAndPermissions();
        $permissionId = $userData['permissions']->pluck('id')->toArray();
        $user         = $userData['user'];
        $roles        = $userData['roles'];
        $permissions  = $userData['permissions'];
        $sheet        = Sheet::whereIn('permission_id', $permissionId)->get();
        $sheetFirst   = Sheet::whereIn('permission_id', $permissionId)->first();

        $permissionsLink = Permission::find($sheetFirst->permission_id);

        $role        = $roles->first(); // Ambil role pertama
        $fieldFilter = $this->getFieldFilter($role, $permissionsLink);

        $sheetName = (strpos($sheetFirst->sheetName, '.') !== false)
        ? str_replace('.', '_', $sheetFirst->sheetName)
        : $sheetFirst->sheetName; // Ganti titik dengan underscore
        $vizUrl  = $permissionsLink->table;
        $jabatan = $user->jabatan;

        if (substr($vizUrl, -1) !== '/') {
            $vizUrl .= '/';
        }

        $vizUrl .= $sheetName . '?:toolbar=no';
        $token = $this->createJWTToken($user);
        return view('home', compact('sheet', 'vizUrl', 'token', 'jabatan', 'fieldFilter'));
    }

    //Akses tableau selanjutnya
    public function AccessTableau($idsheet)
    {
        $userData        = $this->getUserRolesAndPermissions();
        $permissionId    = $userData['permissions']->pluck('id')->toArray();
        $user            = $userData['user'];
        $roles           = $userData['roles'];
        $permissions     = $userData['permissions'];
        $sheet           = Sheet::whereIn('permission_id', $permissionId)->get();
        $sheetfind       = Sheet::find($idsheet);
        $permissionsLink = Permission::find($sheetfind->permission_id);
        $role            = $roles->first(); // Ambil role pertama
        $fieldFilter     = $this->getFieldFilter($role, $permissionsLink);
        $sheetName       = str_replace('.', '_', $sheetfind->sheetName); // Ganti titik dengan underscore
        $vizUrl          = $permissionsLink->table;
        $jabatan         = $user->jabatan;
        if (substr($vizUrl, -1) !== '/') {
            $vizUrl .= '/';
        }

        $vizUrl .= $sheetName;
        $token = $this->createJWTToken($user);

        return view('home', compact('sheet', 'vizUrl', 'token', 'jabatan', 'fieldFilter'));
    }

    //Fieldfileter
    private function getFieldFilter($role, $permissions)
    {
        $fieldFilter = null;

        // Cek apakah $permissions adalah instance dari Permission
        if ($permissions instanceof \Spatie\Permission\Models\Permission) {
            switch ($role) {
                case 'ASM':
                    // Akses langsung ke atribut fieldASM
                    $fieldFilter = $permissions->fieldASM;
                    break;
                case 'RSM':
                    $fieldFilter = $permissions->fieldRSM;
                    break;
                case 'SPV':
                    $fieldFilter = $permissions->fieldSPV;
                    break;
            }
        }

        return $fieldFilter;
    }
}
