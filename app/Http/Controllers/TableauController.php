<?php
namespace App\Http\Controllers;

use Carbon\Carbon;
use Firebase\JWT\JWT;

class TableauController extends Controller
{
    public function ShowHomeTableAU()
    {

        // Ambil data konfigurasi dari .env
        $connectedAppClientId  = env('CONNECTED_APP_CLIENT_ID');
        $connectedAppSecretKey = env('CONNECTED_APP_SECRET_KEY');
        $connectedAppSecretId  = env('CONNECTED_APP_SECRET_ID');
        $user                  = env('USER');
        $vizUrl                = "https://prod-apsoutheast-a.online.tableau.com/t/asiatop/views/TryRevisiINA-TKinerjaSales/Dashboard_P_RSM_INA";

        // Membuat JWT
        $payload = [
            'iss' => $connectedAppClientId,                    // Issuer: Client ID
            'exp' => Carbon::now()->addMinutes(10)->timestamp, // Expiration time (10 menit)
            'jti' => (string) \Str::uuid(),                    // JWT ID, menggunakan UUID
            'aud' => 'tableau',                                // Audience
            'sub' => $user,                                    // Subject (user)
            'scp' => ['tableau:views:embed'],                  // Scope
        ];

        // Generate JWT
        $token = JWT::encode($payload, $connectedAppSecretKey, 'HS256', null, [
            'kid' => $connectedAppSecretId, // Key ID
            'iss' => $connectedAppClientId, // Issuer
        ]);

        // HTML embed Tableau dengan token JWT

        return view('home', compact('vizUrl', 'token'));
    }
}
