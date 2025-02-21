<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CRUDDashboardController;
use App\Http\Controllers\CRUDRoleController;
use App\Http\Controllers\CRUDuserController;
use App\Http\Controllers\DashboardController;
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

        Route::get('/daftardashboard', [CRUDDashboardController::class, 'ShowDaftarDashboard'])->name('daftarDashboard');
        Route::get('/addDashboard', [CRUDDashboardController::class, 'ShowFormAddDashboard'])->name('ShowFormAddDashboard');
        Route::post('/addDashboard', [CRUDDashboardController::class, 'AddDashboard'])->name('AddDashboard');
        Route::delete('/Dashboard/{id}', [CRUDDashboardController::class, 'DeleteDashboard'])->name('DeleteDashboard');

        Route::get('/editDashboard/{id}', [CRUDDashboardController::class, 'ShowFormEditDashboard'])->name('ShowFormEditDashboard');
        Route::put('/editDashboard/{id}', [CRUDDashboardController::class, 'EditDashboard'])->name('EditDashboard');

        Route::get('/role', [CRUDRoleController::class, 'ShowDashboardRule'])->name('ShowDashboardRule');

    });

    // Hanya staff
    Route::group(['middleware' => ['role:staff']], function () {
        Route::get('/hometableau', [TableauController::class, 'ShowHomeTableAU'])->name('homeTableAU');
    });
});
