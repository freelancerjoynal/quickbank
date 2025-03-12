<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('apply_for_loans', function (Blueprint $table) {
            $table->id(); // Primary key auto-increment ID

            // Personal Information
            $table->string('full_name'); // Applicant's full legal name
            $table->string('email')->unique(); // Unique email for communication
            $table->string('phone_number'); // Primary contact number
            $table->text('address'); // Current residential address
            $table->date('date_of_birth'); // Applicant's date of birth
            $table->string('national_id')->unique(); // Government issued ID number

            // Employment Details
            $table->string('employment_status'); // Current employment status (employed, self-employed, etc)
            $table->decimal('monthly_income', 15, 2); // Verified monthly income amount
            $table->string('employer_name')->nullable(); // Current employer's company name
            $table->string('employer_contact')->nullable(); // Employer's contact information for verification

            // Loan Details
            $table->decimal('loan_amount', 15, 2); // Requested loan amount
            $table->string('loan_purpose'); // Intended purpose of the loan
            $table->integer('loan_term'); // Duration of loan in months
            $table->decimal('interest_rate', 5, 2)->default(0.0); // Annual interest rate percentage

            // Collateral Information
            $table->decimal('collateral_value', 15, 2)->nullable(); // Estimated value of collateral
            $table->string('collateral_description')->nullable(); // Description of collateral asset

            // Application Status
            $table->boolean('terms_agreed'); // Agreement to loan terms and conditions
            $table->string('status')->default('pending'); // Current application status
            $table->string('coupon')->default('pending'); // Promotional or referral coupon code

            $table->string('referral_name')->nullable(); // Name of referrer
            $table->tinyInteger('referral_id')->nullable(); // ID of referrer

            $table->timestamp('approval_date')->nullable(); // Approval date (if approved)
            $table->text('note')->nullable(); // Admin or system comments
            $table->text('feedback')->nullable(); // Admin or system comments
            $table->timestamps(); // Created at & Updated at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apply_for_loans');
    }
};
