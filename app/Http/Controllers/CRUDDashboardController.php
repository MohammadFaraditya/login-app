<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;

class CRUDDashboardController extends Controller
{
    public function ShowDaftarDashboard(Request $request)
    {
        $search = $request->get('search'); // Ambil parameter 'search'

        if ($search) {
            // Filter data berdasarkan username, email, atau role
            $permissions = Permission::where('name', 'like', '%' . $search . '%')->get();
        } else {
            // Jika parameter 'search' kosong, ambil semua data
            $permissions = Permission::all();
        }

        return view('dashboardAdministrator.dashboardTableau.DaftarDashboard', compact('permissions'));
    }

    public function ShowFormAddDashboard()
    {
        return view('dashboardAdministrator.dashboardTableau.FormAddDashboard');
    }

    public function AddDashboard(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nameTable'     => 'required',
            'DashboardLink' => 'required',
            'FieldRSM'      => 'required',
            'FieldASM'      => 'required',
            'FieldSPV'      => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        $existingDashboardName = Permission::where('name', $request->nameTable)->first();
        $existingTable         = Permission::where('table', $request->DashboardLink)->first();

        if ($existingDashboardName) {
            return redirect()->back()->withInput()->with('error', 'Nama dashboard tersebut sudah dipakai, silakan gunakan dashboard lain.');
        } else if ($existingTable) {
            return redirect()->back()->withInput()->with('error', 'Link dashboard tersebut sudah ada.');
        } else {
            // Insert Dashboard
            Permission::create([
                'name'     => $request->nameTable,
                'table'    => $request->DashboardLink,
                'fieldRSM' => $request->FieldRSM,
                'fieldASM' => $request->FieldASM,
                'fieldSPV' => $request->FieldSPV,

            ]);

            // Redirect after successful insertion
            return redirect()->route('daftarDashboard')->with('success', 'Dashboard berhasil ditambahkan!');
        }
    }

    public function DeleteDashboard($id)
    {
        $dashboard = Permission::find($id);
        if (! $dashboard) {
            return redirect()->route('daftarDashboard')->with('error', 'Dashboard tidak ditemukan.');
        }

        // Hapus user
        $dashboard->delete();

        return redirect()->route('daftarDashboard')->with('success', 'Dashboard berhasil dihapus.');
    }

    public function ShowFormEditDashboard($id)
    {
        // get data dashboard
        $permissions = Permission::findOrFail($id);
        return view('dashboardAdministrator.dashboardTableau.FormEditDashboard', compact('permissions'));
    }

    public function EditDashboard(Request $request, $id)
    {
        //validasi
        $validator = Validator::make($request->all(), [
            'DashboardName' => 'required',
            'DashboardLink' => 'required',
            'FieldRSM'      => 'required',
            'FieldASM'      => 'required',
            'FieldSPV'      => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        try {

            $permissions = Permission::findOrFail($id);

            $validateData = $validator->validate();

            $existingDashboardName = Permission::where('name', $validateData['DashboardName'])
                ->where('id', '!=', $id) // Jangan bandingkan dengan yang sedang diedit
                ->first();

            if ($existingDashboardName) {
                return redirect()->back()->withInput()->with('error', 'Nama Dashboard Sudah dipakai');
            }

            // Cek apakah link dashboard sudah digunakan, kecuali untuk dashboard yang sedang diedit
            $existingTableLink = Permission::where('table', $validateData['DashboardLink'])
                ->where('id', '!=', $id) // Jangan bandingkan dengan yang sedang diedit
                ->first();

            if ($existingTableLink) {
                return redirect()->back()->withInput()->with('error', 'Link Dashboard sudah terdaftar');
            }

            $permissions->name     = $validateData['DashboardName'];
            $permissions->table    = $validateData['DashboardLink'];
            $permissions->fieldRSM = $validateData['FieldRSM'];
            $permissions->fieldASM = $validateData['FieldASM'];
            $permissions->fieldSPV = $validateData['FieldSPV'];
            $permissions->save();

            return redirect()->route('daftarDashboard')->with('success', 'Success Update Dashboard');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed update Dasboard' . $e->getMessage());
        }
    }
}
