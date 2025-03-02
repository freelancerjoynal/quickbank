<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Website/HomePage/Welcome', [ ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('Website/AboutPage/AboutPage', [ ]);
})->name('about');

Route::get('/appy-for-loan', function () {
    return Inertia::render('Website/LoanPage/LoanPage', [ ]);
})->name('apply.loan');


