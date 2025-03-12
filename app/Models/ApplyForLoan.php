<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplyForLoan extends Model
{
    protected $fillable =[
        'full_name',
        'email',
        'phone_number',
        'address',
        'date_of_birth',
        'national_id',
        'employment_status',
        'monthly_income',
        'employer_name',
        'employer_contact',
        'loan_amount',
        'loan_purpose',
        'loan_term',
        'interest_rate',
        'collateral_value',
        'collateral_description',
        'terms_agreed',
        'status',
        'coupon',
        'referral_name',
        'referral_id',
        'approval_date',
        'note',
        'feedback'
    ]
}
