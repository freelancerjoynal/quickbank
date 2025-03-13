<?php

use App\Http\Controllers\adminDashboard\dashboardController;
use Illuminate\Support\Facades\Route;



// Include guest routes from the guestRoutes.php file
require __DIR__ . '/website.php';

Route::middleware(['auth', 'verified', 'isAdmin'])->group(function () {

    require __DIR__ . '/AdminRoutes.php';

});

Route::middleware(['auth', 'verified', 'isAuthUser'])->group(function () {


    require __DIR__ . '/UserRoutes.php';

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
