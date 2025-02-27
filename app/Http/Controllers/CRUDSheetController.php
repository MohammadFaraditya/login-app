<?php
namespace App\Http\Controllers;

use App\Models\Sheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;

class CRUDSheetController extends Controller
{
    public function ShowDashboardSheet(Request $request)
    {
        $search = $request->get('search');

        if ($search) {
            // Filter berdasarkan nama sheet
            $sheet      = Sheet::where('name', 'like', '%' . $search . '%')->get();
            $idsheets   = $sheet->pluck('permission_id');
            $permission = Permission::whereIn('id', $idsheets)->get();
        } else {
            // Jika parameter 'search' kosong, ambil semua data
            $sheet      = Sheet::all();
            $idsheets   = $sheet->pluck('permission_id');
            $permission = Permission::whereIn('id', $idsheets)->get();
        }

        // Pastikan sheet berisi koleksi atau array
        if ($sheet->isEmpty()) {
            $sheet = collect([]); // Mengembalikan koleksi kosong jika tidak ada sheet
        }

        return view('dashboardAdministrator.dashboardSheet.daftarSheet', compact('sheet', 'permission'));
    }

    public function ShowFormAddSheet()
    {
        $permission = Permission::all();

        return view('dashboardAdministrator.dashboardSheet.FormAddSheet', compact('permission'));
    }

    public function AddSheet(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'selectPermission' => 'required',
            'Sheet.*'          => 'required|string', // Validasi array 'Sheet[]', setiap item harus berupa string
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $permissionId = $request->selectPermission;
        $sheetNames   = $request->Sheet; // Ini adalah array Sheet[]

        // Proses setiap sheet yang dimasukkan
        foreach ($sheetNames as $sheetName) {
            // Membuat ID unik untuk setiap sheet
            $uniqueId = Str::random(8);

            // Cek apakah ID sudah ada di database
            while (Sheet::where('idsheet', $uniqueId)->exists()) {
                $uniqueId = Str::random(8); // Generate ID baru jika sudah ada
            }

            // Simpan sheet baru ke database
            Sheet::create([
                'idsheet'       => $uniqueId,
                'permission_id' => $permissionId, // Menyimpan ID permission yang dipilih
                'name'          => $sheetName,    // Menyimpan nama sheet
            ]);
        }

        return redirect()->route('ShowDashoardSheet')->with('success', 'Sheet berhasil ditambahkan!');
    }

    public function ShowFormEditSheet($id)
    {
        $sheet = Sheet::findOrFail($id);

        return view('dashboardAdministrator.dashboardSheet.FormEditSheet', compact('sheet'));
    }
}
