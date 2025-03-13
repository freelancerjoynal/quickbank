<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class UserLoanController extends Controller
{
    //show the loan page
    public function showLoanPage()
    {
        return Inertia::render('Website/LoanPage/ApplyLoan');
    }
}
