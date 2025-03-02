<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('HomePage/Welcome', [ ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('AboutPage/AboutPage', [ ]);
})->name('about');

Route::get('/appy-for-loan', function () {
    return Inertia::render('LoanPage/LoanPage', [ ]);
})->name('apply.loan');


