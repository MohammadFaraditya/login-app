<?php
namespace App\Http\Controllers;

use App\Models\Sheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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
            'selectPermission'   => 'required',
            'NamaSheet.*'        => 'required|string',
            'NamaSheetTableau.*' => 'required|string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $permissionId = $request->selectPermission;
        $sheetNames   = $request->NamaSheet;        // Ini adalah array
        $tableauSheet = $request->NamaSheetTableau; // Ini adalah array

// Pastikan jumlah elemen dalam kedua array sama
        if (count($sheetNames) === count($tableauSheet)) {
            // Proses setiap sheet yang dimasukkan
            foreach ($sheetNames as $index => $sheetName) {
                // Ambil tableauSheet yang sesuai dengan index
                $sheetTableauName = $tableauSheet[$index];

                // Membuat ID unik untuk setiap sheet
                $uniqueId = rand(1000, 9999) . rand(1000, 9999);

                // Cek apakah ID sudah ada di database
                while (Sheet::where('idsheet', $uniqueId)->exists()) {
                    $uniqueId = rand(1000, 9999) . rand(1000, 9999); // Generate ID baru jika sudah ada
                }

                // Simpan sheet baru ke database
                Sheet::create([
                    'idsheet'       => $uniqueId,
                    'permission_id' => $permissionId,
                    'name'          => $sheetName,        // Nama sheet
                    'sheetName'     => $sheetTableauName, // Sheet tableau
                ]);
            }
            return redirect()->route('ShowDashoardSheet')->with('success', 'Sheet berhasil ditambahkan!');
        } else {
            // Jika jumlah elemen tidak sama, beri pesan error atau penanganan
            return redirect()->back()->withErrors(['error' => 'Jumlah Nama Sheet dan Sheet Tableau tidak sama!']);
        }
    }

    public function ShowFormEditSheet($id)
    {
        $sheet        = Sheet::findOrFail($id);
        $permissionid = Permission::where('id', $sheet->permission_id)->first();
        $permission   = Permission::all();
        return view('dashboardAdministrator.dashboardSheet.FormEditSheet', compact('sheet', 'permission', 'permissionid'));
    }

    public function EditSheet(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'selectPermission' => 'required',
            'namaSheet'        => 'required',
            'SheetTableau'     => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        try {
            // Use the correct $id variable to find the sheet
            $sheet = Sheet::findOrFail($id);
            // If sheet is not found, return error
            if (! $sheet) {
                return redirect()->back()->with('error', 'Sheet tidak ditemukan');
            }

            $validateData = $validator->validated();

            // Check if the sheet name already exists (except the current one)
            $existingSheetName = Sheet::where('name', $validateData['namaSheet'])
                ->where('idsheet', '!=', $id)
                ->first();
            if ($existingSheetName) {
                return redirect()->back()->withInput()->with('error', 'Nama Sheet Sudah dipakai');
            }

            // Update the sheet data
            $sheet->permission_id = $validateData['selectPermission'];
            $sheet->name          = $validateData['namaSheet'];
            $sheet->sheetName     = $validateData['SheetTableau'];

            // Save the updated sheet
            $sheet->save();

            return redirect()->route('ShowDashoardSheet')->with('success', 'Success Update Sheet');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed Update Sheet: ' . $e->getMessage());
        }
    }

    public function DeleteSheet($id)
    {
        $sheet = Sheet::findOrFail($id);
        if (! $sheet) {
            return redirect()->route('ShowDashoardSheet')->with('error', 'Sheet tidak ditemukan.');
        }

        $sheet->delete();

        return redirect()->route('ShowDashoardSheet')->with('success', 'Sheet Berhasil Dihapus');
    }
}
