<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // login page
    public function showLoginForm()
    {
        return view('login');
    }

    // login process
    public function handleLogin(Request $request)
    {
        // validation input
        $request->validate([
            'username' => 'required|string|max:255',
            'password' => 'required|string|min:5',
        ]);

        // Login checking
        $credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            if ($user->hasRole('administrator')) {
                return redirect()->route('dashboard');
            } else {
                return redirect()->route('homeTableAU');
            }
        } else {
            return redirect()->route('login')
                ->withInput()
                ->with('failed', 'Username atau Password salah');
        }

    }

    public function handleLogout()
    {
        Auth::logout();
        return redirect()->route('login')->with('success', 'Berhasil Logout');
    }
}
