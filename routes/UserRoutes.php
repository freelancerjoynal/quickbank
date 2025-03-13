<?php

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::get('my-account', [UserController::class, 'profileDashboard'])->name('my.account');

