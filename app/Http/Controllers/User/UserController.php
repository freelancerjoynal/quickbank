<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    //show the profile page
    public function profileDashboard(){
        return Inertia::render('Website/User/ProfileDashboard');
    }
}
