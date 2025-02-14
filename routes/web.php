<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CRUDuserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TableauController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('login');
});
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'handleLogin'])->name('loginProcess');
Route::get('/logout', [AuthController::class, 'handleLogout'])->name('logoutProcess');

// Rute dengan autentikasi dan peran
Route::group(['middleware' => ['auth']], function () {
    // Hanya administrator
    Route::group(['middleware' => ['role:administrator']], function () {
        Route::get('/dashboard', [DashboardController::class, 'ShowDashboard'])->name('dashboard');

        Route::get('/adduser', [CRUDuserController::class, 'ShowFormAddUser'])->name('ShowFormAddUser');
        Route::post('/adduser', [CRUDuserController::class, 'AddUser'])->name('AddUser');
        Route::delete('/user/{id}', [CRUDuserController::class, 'DeleteUser'])->name('DeleteUser');

        Route::get('/edit/{id}', [CRUDuserController::class, 'ShowFormEditUser'])->name('ShowFormEditUser');
        Route::put('/edit/{id}', [CRUDuserController::class, 'EditUser'])->name('EditUser');

    });

    // Hanya staff
    Route::group(['middleware' => ['role:staff']], function () {
        Route::get('/tableau', [HomeController::class, 'ShowHomeTableAU'])->name('homeTableAU');
    });

    Route::get('/tableau', [TableauController::class, 'redirectToTableau'])->name('tableau');

});
