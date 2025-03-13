<?php

use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

// Home Route
Route::get('/', function () {
    return Inertia::render('Website/HomePage/Welcome', []);
})->name('home');

// About Page Route
Route::get('/about', function () {
    return Inertia::render('Website/AboutPage/AboutPage', []);
})->name('website.about');

// Loan Application Page Route
Route::get('/loan', function () {
    return Inertia::render('Website/LoanPage/LoanPage', []);
})->name('website.apply.loan');

// Users Page Route
Route::get('/users', function () {
    return Inertia::render('Website/Users', []);
})->name('website.users');

// Fetch Users (via Inertia)
Route::get('/get-users', function () {
    // Fetch all users
    $users = User::all();

    return Inertia::render('Website/Users', [
        'users' => $users,  // Pass users to the Inertia view
    ]);
})->name('website.get.users');






Route::get('/my-account', [UserController::class, 'profileDashboard'])->name('my.account');