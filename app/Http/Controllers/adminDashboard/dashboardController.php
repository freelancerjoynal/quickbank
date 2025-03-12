<?php

namespace App\Http\Controllers\adminDashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class dashboardController extends Controller
{
    public function AdminDashboard()
    {
        return Inertia::render('manager/dashboard');
    }
}
