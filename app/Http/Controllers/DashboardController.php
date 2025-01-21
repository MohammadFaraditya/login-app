<?php
namespace App\Http\Controllers;

use App\Models\User;

class DashboardController extends Controller
{
    public function ShowDashboard()
    {
        $users = User::all();
        return view('dashboard', compact('users'));
    }
}
