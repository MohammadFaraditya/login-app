<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function ShowDashboard(Request $request)
    {
        $search = $request->get('search'); // Ambil parameter 'search'

        if ($search) {
            // Filter data berdasarkan username, email, atau role
            $users = User::where('username', 'like', '%' . $search . '%')
                ->orWhereHas('roles', function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                })
                ->get();
        } else {
            // Jika parameter 'search' kosong, ambil semua data
            $users = User::all();
        }

        return view('dashboard', compact('users'));
    }
}
