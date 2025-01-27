<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TableauController extends Controller
{
    public function redirectToTableau(Request $request)
    {
        $user = auth()->user();

        // Ambil Personal Access Token (PAT) dari user
        $patName   = $user->pat_name;
        $patSecret = $user->pat_secret;

        if (! $patName || ! $patSecret) {
            return redirect()->back()->with('error', 'Tableau credentials not found.');
        }

        $tableauServerUrl = config('services.tableau.url');
        $apiVersion       = '3.24';

        // Path ke file sertifikat CA
        $certPath = storage_path('certs/cacert.pem');

        // Login ke Tableau REST API dengan sertifikat
        $response = Http::withOptions([
            'verify' => $certPath, // Menambahkan path sertifikat
        ])->post("$tableauServerUrl/api/$apiVersion/auth/signin", [
            'credentials' => [
                'personalAccessTokenName'   => decrypt($patName),
                'personalAccessTokenSecret' => decrypt($patSecret),
                'site'                      => ['contentUrl' => 'asiatop'],
            ],
        ]);

        if ($response->failed()) {
            return redirect()->back()->with('error', 'Failed to authenticate with Tableau.');
        }

        // Cek jika konten adalah XML
        if ($response->header('Content-Type') == 'application/xml;charset=utf-8') {
            // Mengonversi XML ke array
            $xmlContent  = simplexml_load_string($response->body());
            $jsonContent = json_encode($xmlContent);
            $data        = json_decode($jsonContent, true); // Mengubah menjadi array
        } else {
            // Jika bukan XML, kita proses seperti biasa
            $data = $response->json();
        }

        $authToken = $data['credentials']['@attributes']['token'] ?? null;
        $siteId    = $data['credentials']['site']['@attributes']['id'] ?? null;
        $userId    = $data['credentials']['user']['@attributes']['id'] ?? null;

        if (! $authToken || ! $siteId) {
            return redirect()->back()->with('error', 'Authentication failed or invalid response from Tableau.');
        }

// Simpan authToken dan siteId ke dalam session
        session([
            'tableau_auth_token' => $authToken,
            'tableau_site_id'    => $siteId,

        ]);
        // Redirect ke Tableau Dashboard (URL disesuaikan)
        return redirect()->away("$tableauServerUrl/t/$siteId?token=$authToken");
    }
}
