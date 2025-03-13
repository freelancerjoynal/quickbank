<?php

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\UserLoanController;
use Illuminate\Support\Facades\Route;

Route::get('my-account', [UserController::class, 'profileDashboard'])->name('my.account');
Route::get('apply-for-loan', [UserLoanController::class, 'showLoanPage'])->name('apply.loan.page');

