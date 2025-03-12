<?php

use App\Http\Controllers\adminDashboard\dashboardController;
use Illuminate\Support\Facades\Route;




// Include guest routes from the guestRoutes.php file
require __DIR__ . '/website.php';




Route::middleware(['auth', 'verified', 'roleChecherGroup'])->group(function () {

    Route::get('dashboard', [dashboardController::class, 'AdminDashboard'])->name('admin.dashboard');


});















require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
