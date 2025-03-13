import { Button } from '@/components/ui/button';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';

export default function ApplyLoan() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        loanType: '',
        amount: '',
        term: '',
        employmentStatus: '',
        monthlyIncome: '',
        purpose: '',
        comments: '',
        termsAgreed: false
    });

    const [errors, setErrors] = useState({
        loanType: '',
        amount: '',
        term: '',
        employmentStatus: '',
        monthlyIncome: '',
        purpose: '',
        termsAgreed: ''
    });

    const [attemptedNext, setAttemptedNext] = useState(false);

    const steps = [
        { name: 'Loan Details', description: 'Type, amount and term' },
        { name: 'Financial Information', description: 'Employment and income' },
        { name: 'Application Purpose', description: 'Reason for applying' },
    ];

    const validateCurrentStep = () => {
        let isValid = true;
        let newErrors = { ...errors };

        // Reset all errors first
        Object.keys(newErrors).forEach(key => {
            newErrors[key] = '';
        });

        // Step 1 validation
        if (currentStep === 0) {
            if (!formData.loanType) {
                newErrors.loanType = 'Loan type is required';
                isValid = false;
            }

            if (!formData.amount) {
                newErrors.amount = 'Loan amount is required';
                isValid = false;
            } else if (Number(formData.amount) <= 0) {
                newErrors.amount = 'Amount must be greater than 0';
                isValid = false;
            }

            if (!formData.term) {
                newErrors.term = 'Loan term is required';
                isValid = false;
            } else if (Number(formData.term) <= 0) {
                newErrors.term = 'Term must be greater than 0';
                isValid = false;
            }
        }

        // Step 2 validation
        else if (currentStep === 1) {
            if (!formData.employmentStatus) {
                newErrors.employmentStatus = 'Employment status is required';
                isValid = false;
            }

            if (!formData.monthlyIncome) {
                newErrors.monthlyIncome = 'Monthly income is required';
                isValid = false;
            } else if (Number(formData.monthlyIncome) <= 0) {
                newErrors.monthlyIncome = 'Income must be greater than 0';
                isValid = false;
            }
        }

        // Step 3 validation
        else if (currentStep === 2) {
            if (!formData.purpose) {
                newErrors.purpose = 'Loan purpose is required';
                isValid = false;
            } else if (formData.purpose.length < 10) {
                newErrors.purpose = 'Please provide more details about your loan purpose';
                isValid = false;
            }

            if (!formData.termsAgreed) {
                newErrors.termsAgreed = 'You must agree to the terms and conditions';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNextStep = () => {
        setAttemptedNext(true);
        const isValid = validateCurrentStep();

        if (isValid && currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            setAttemptedNext(false);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setAttemptedNext(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAttemptedNext(true);

        const isValid = validateCurrentStep();
        if (isValid) {
            console.log('Form submitted successfully:', formData);
            // Here you would typically send the data to your server
            alert('Loan application submitted successfully!');
        }
    };

    return (
        <WebsiteLayout>
            <Head title="Apply For Loan"></Head>
            <div className="bg-gray-50">
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Loan Application</h1>
                        <p className="mt-3 text-lg text-gray-600">Complete the form below to apply for your loan</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Progress Steps */}
                        <div className="border-b border-gray-200">
                            <nav className="mx-auto px-6 py-4">
                                <ol className="flex items-center w-full">
                                    {steps.map((step, index) => (
                                        <li key={step.name} className={`flex items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                                            <div className="flex items-center">
                                                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                                                    currentStep > index ? 'bg-amber-600 border-amber-600 text-white' :
                                                    currentStep === index ? 'border-amber-600 text-amber-600' : 'border-gray-300 text-gray-500'
                                                }`}>
                                                    {currentStep > index ? (
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                                        </svg>
                                                    ) : (
                                                        <span>{index + 1}</span>
                                                    )}
                                                </div>
                                                <div className="ml-4">
                                                    <p className={`text-sm font-medium ${currentStep >= index ? 'text-amber-600' : 'text-gray-500'}`}>{step.name}</p>
                                                    <p className="text-xs text-gray-500">{step.description}</p>
                                                </div>
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="flex-1 border-t-2 border-gray-200 mx-4"></div>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>

                        {/* Form Content */}
                        <div className="px-6 py-8">
                            <form onSubmit={handleSubmit}>
                                {/* Step 1: Loan Details */}
                                {currentStep === 0 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type*</label>
                                            <select
                                                className={`w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.loanType ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                value={formData.loanType}
                                                onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                                            >
                                                <option value="">Select a loan type</option>
                                                <option value="personal">Personal Loan</option>
                                                <option value="mortgage">Mortgage Loan</option>
                                                <option value="auto">Auto Loan</option>
                                                <option value="business">Business Loan</option>
                                                <option value="education">Education Loan</option>
                                            </select>
                                            {attemptedNext && errors.loanType && (
                                                <p className="mt-1 text-sm text-red-600">{errors.loanType}</p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount ($)*</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span className="text-gray-500 sm:text-sm">$</span>
                                                    </div>
                                                    <input
                                                        type="number"
                                                        className={`pl-7 w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.amount ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                        placeholder="0.00"
                                                        value={formData.amount}
                                                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                                    />
                                                </div>
                                                {attemptedNext && errors.amount && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (months)*</label>
                                                <input
                                                    type="number"
                                                    className={`w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.term ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                    placeholder="12, 24, 36, etc."
                                                    value={formData.term}
                                                    onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                                                />
                                                {attemptedNext && errors.term && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.term}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Employment & Income */}
                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status*</label>
                                            <select
                                                className={`w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.employmentStatus ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                value={formData.employmentStatus}
                                                onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                                            >
                                                <option value="">Select status</option>
                                                <option value="employed">Employed Full-Time</option>
                                                <option value="employed-part">Employed Part-Time</option>
                                                <option value="self-employed">Self-Employed</option>
                                                <option value="retired">Retired</option>
                                                <option value="unemployed">Not Currently Employed</option>
                                            </select>
                                            {attemptedNext && errors.employmentStatus && (
                                                <p className="mt-1 text-sm text-red-600">{errors.employmentStatus}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income ($)*</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span className="text-gray-500 sm:text-sm">$</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className={`pl-7 w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.monthlyIncome ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                    placeholder="0.00"
                                                    value={formData.monthlyIncome}
                                                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                                                />
                                            </div>
                                            {attemptedNext && errors.monthlyIncome && (
                                                <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome}</p>
                                            )}
                                            <p className="mt-1 text-xs text-gray-500">Please enter your gross monthly income before taxes.</p>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Purpose & Comments */}
                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Loan*</label>
                                            <textarea
                                                className={`w-full min-h-32 rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.purpose ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                                                placeholder="Please describe how you plan to use the loan funds..."
                                                value={formData.purpose}
                                                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                            />
                                            {attemptedNext && errors.purpose && (
                                                <p className="mt-1 text-sm text-red-600">{errors.purpose}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments (Optional)</label>
                                            <textarea
                                                className="w-full min-h-24 rounded-lg border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 transition-colors py-3"
                                                placeholder="Any additional information you'd like to share with our loan officers..."
                                                value={formData.comments}
                                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                            />
                                        </div>
                                        <div className={`bg-gray-50 p-4 rounded-lg ${attemptedNext && errors.termsAgreed ? 'border border-red-300' : 'border border-gray-200'}`}>
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="terms"
                                                        name="terms"
                                                        type="checkbox"
                                                        className={`h-4 w-4 rounded ${attemptedNext && errors.termsAgreed ? 'text-red-600 focus:ring-red-500' : 'text-amber-600 focus:ring-amber-500'} border-gray-300`}
                                                        checked={formData.termsAgreed}
                                                        onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions*</label>
                                                    <p className="text-gray-500">By submitting this application, I confirm that all information provided is accurate and complete.</p>
                                                </div>
                                            </div>
                                            {attemptedNext && errors.termsAgreed && (
                                                <p className="mt-2 text-sm text-red-600">{errors.termsAgreed}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="mt-10 flex justify-between">
                                    <Button
                                        type="button"
                                        onClick={handlePrevStep}
                                        variant="outline"
                                        className={`px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 ${currentStep === 0 ? 'invisible' : ''}`}
                                    >
                                        Previous
                                    </Button>

                                    {currentStep < steps.length - 1 ? (
                                        <Button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white"
                                        >
                                            Next
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            className="px-8 py-2 bg-amber-600 hover:bg-amber-700 text-white"
                                        >
                                            Submit Application
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Need assistance? Contact our loan specialists at (555) 123-4567</p>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
}