<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




// Include guest routes from the guestRoutes.php file
require __DIR__ . '/website.php';




Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
