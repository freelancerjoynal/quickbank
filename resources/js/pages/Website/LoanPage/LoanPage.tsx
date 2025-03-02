import LoanCalculator from '@/components/LoanCalculator';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { useState } from 'react';

const LoanPage = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(5.5);
    const [loanTerm, setLoanTerm] = useState(15);
    const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');

    // Calculate loan details
    const calculateMonthlyPayment = () => {
        const principal = loanAmount;
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;

        const monthlyPayment =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        return monthlyPayment.toFixed(2);
    };

    const totalInterest = () => {
        const monthlyPayment = calculateMonthlyPayment();
        const totalPayment = monthlyPayment * loanTerm * 12;
        return (totalPayment - loanAmount).toFixed(2);
    };

    const totalPayment = () => {
        return (parseFloat(calculateMonthlyPayment()) * loanTerm * 12).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Loan application submitted successfully!');
    };

    // Format currency
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        }).format(value);
    };

    const loanTypes = [
        { id: 'personal', name: 'Personal Loan' },
        { id: 'mortgage', name: 'Mortgage Loan' },
        { id: 'auto', name: 'Auto Loan' },
        { id: 'business', name: 'Business Loan' },
        { id: 'education', name: 'Education Loan' },
    ];

    return (
        <WebsiteLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-black via-yellow-800 to-black pt-28 pb-16 text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="mb-4 text-4xl font-bold">Get Your Loan Today</h1>
                        <p className="max-w-3xl text-xl">
                            Quick Bank offers competitive interest rates and flexible loan terms tailored to your financial needs.
                        </p>
                    </div>
                </div>

                {/* Loan Types Section */}
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <h2 className="mb-8 text-3xl font-semibold text-gray-800">Choose Your Loan Type</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {loanTypes.map((type) => (
                            <div
                                key={type.id}
                                className="cursor-pointer rounded-lg border-2 border-transparent bg-white p-6 shadow-md transition duration-300 hover:border-amber-500 hover:shadow-lg"
                            >
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">{type.name}</h3>
                                <p className="mb-4 text-gray-600">
                                    Starting at {type.id === 'mortgage' ? '3.5' : type.id === 'auto' ? '4.25' : '5.5'}% APR
                                </p>
                                <button className="font-medium text-amber-600 hover:text-amber-700">Learn more →</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Loan Calculator Section */}
                <LoanCalculator schedule={true} />

                {/* Application Form */}
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <h2 className="mb-8 text-3xl font-semibold text-gray-800">Loan Application</h2>

                    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-md md:p-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="mb-6 text-xl font-semibold">Personal Information</h3>

                                <div className="mb-4">
                                    <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-6 text-xl font-semibold">Financial Information</h3>

                                <div className="mb-4">
                                    <label htmlFor="employmentStatus" className="mb-1 block text-sm font-medium text-gray-700">
                                        Employment Status
                                    </label>
                                    <select
                                        id="employmentStatus"
                                        value={employmentStatus}
                                        onChange={(e) => setEmploymentStatus(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                        required
                                    >
                                        <option value="">Select...</option>
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Self-employed">Self-employed</option>
                                        <option value="Unemployed">Unemployed</option>
                                        <option value="Retired">Retired</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="annualIncome" className="mb-1 block text-sm font-medium text-gray-700">
                                        Annual Income
                                    </label>
                                    <input
                                        type="number"
                                        id="annualIncome"
                                        value={annualIncome}
                                        onChange={(e) => setAnnualIncome(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                                        placeholder="$"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center">
                                        <input
                                            id="termsAgree"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                            required
                                        />
                                        <label htmlFor="termsAgree" className="ml-2 block text-sm text-gray-700">
                                            I agree to the terms and conditions and authorize Quick Bank to perform a credit check.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-amber-500 px-8 py-3 font-medium text-white transition duration-300 hover:bg-amber-600 md:w-auto"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>

                {/* FAQ Section */}
                <div className="border-t border-gray-200 bg-gray-50 py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">What documents do I need to apply?</h3>
                                <p className="text-gray-600">
                                    To apply for a loan, you'll need valid ID, proof of income (such as pay stubs or tax returns), bank statements
                                    from the last 3 months, and proof of address.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">How long does approval take?</h3>
                                <p className="text-gray-600">
                                    Most applications are processed within 1-3 business days. Once approved, funds can be disbursed to your account
                                    within 24 hours.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">Are there any prepayment penalties?</h3>
                                <p className="text-gray-600">
                                    No, Quick Bank does not charge prepayment penalties. You're free to pay off your loan early without incurring
                                    additional fees.
                                </p>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">What credit score do I need?</h3>
                                <p className="text-gray-600">
                                    While we consider multiple factors for approval, a credit score of 650 or higher typically qualifies for our best
                                    rates. Lower scores may still be eligible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default LoanPage;
