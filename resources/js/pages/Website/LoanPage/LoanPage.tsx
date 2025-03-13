import FAQSection from '@/components/faqSection';
import LoanCalculator from '@/components/LoanCalculator';
import { Button } from '@/components/ui/button';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';


const LoanPage = () => {

    const {auth} = usePage().props;



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
                <div className='min-h-64 text-center'>
                    {
                        auth.user ? (
                            <Link>
                                <Button>Apply Now</Button>
                            </Link>
                        ):(
                            <Link>
                                <Button>Register</Button>
                            </Link>
                        )
                    }

                </div>

                {/* Loan Calculator Section */}
                <LoanCalculator schedule={true} />



                {/* FAQ Section */}
                <FAQSection/>
            </div>
        </WebsiteLayout>
    );
};

export default LoanPage;
