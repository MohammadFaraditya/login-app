<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TableauController extends Controller
{
    public function redirectToTableau(Request $request)
    {
        // Ambil user yang sedang login
        $user = auth()->user();

        // Ambil Personal Access Token (PAT) dari user
        $patName   = $user->pat_name;
        $patSecret = $user->pat_secret;

        // Validasi apakah PAT (Personal Access Token) sudah ada
        if (! $patName || ! $patSecret) {
            return redirect()->back()->with('error', 'Tableau credentials not found.');
        }

        // API URL Tableau Server dan API version
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
                'site'                      => ['contentUrl' => 'asiatop'], // Ganti dengan site yang sesuai
            ],
        ]);

        // Jika response gagal, return error
        if ($response->failed()) {
            return redirect()->back()->with('error', 'Failed to authenticate with Tableau.');
        }

        // Mengonversi XML ke array jika response dalam format XML
        if ($response->header('Content-Type') == 'application/xml;charset=utf-8') {
            $xmlContent  = simplexml_load_string($response->body());
            $jsonContent = json_encode($xmlContent);
            $data        = json_decode($jsonContent, true); // Mengubah menjadi array
        } else {
            // Jika response bukan XML, proses seperti biasa
            $data = $response->json();
        }

        // Ambil authToken, siteId, dan userId dari response
        $authToken      = $data['credentials']['@attributes']['token'] ?? null;
        $siteId         = $data['credentials']['site']['@attributes']['id'] ?? null;
        $siteContentUrl = $data['credentials']['site']['@attributes']['contentUrl'] ?? 'asiatop'; // Ganti dengan contentUrl yang sesuai

        // Jika authToken atau siteId tidak ditemukan, kembalikan error
        if (! $authToken || ! $siteId) {
            return redirect()->back()->with('error', 'Authentication failed or invalid response from Tableau.');
        }

        // Simpan authToken dan siteId ke dalam session
        session([
            'tableau_auth_token' => $authToken,
            'tableau_site_id'    => $siteId,
        ]);

        $dashboardUrl = "$tableauServerUrl/t/$siteContentUrl/views/dashboard";

        return view('embed', compact('dashboardUrl', 'authToken'));
    }
}
