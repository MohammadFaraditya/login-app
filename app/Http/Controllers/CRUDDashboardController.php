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

        return view('DaftarDashboard', compact('permissions'));
    }

    public function ShowFormAddDashboard()
    {
        return view('FormAddDashboard');
    }

    public function AddDashboard(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nameTable'     => 'required',
            'DashboardLink' => 'required',
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
        }

        // Insert Dashboard
        Permission::firstOrCreate(['name' => $request->nameTable, 'table' => $request->DashboardLink])->redirect('daftarDashboard')->with('success', 'Dashboard berhasil ditambahkan!');
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
}
