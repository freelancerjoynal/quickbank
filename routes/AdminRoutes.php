<?php

use App\Http\Controllers\adminDashboard\dashboardController;
use Illuminate\Support\Facades\Route;



Route::get('dashboard', [dashboardController::class, 'AdminDashboard'])->name('dashboard');
