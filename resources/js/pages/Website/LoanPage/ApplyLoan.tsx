import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import LoanSteps from './components/LoanSteps';
import LoanDetailsStep from './components/LoanDetailsStep';
import FinancialInfoStep from './components/FinancialInfoStep';
import PurposeStep from './components/PurposeStep';
import NavigationButtons from './components/NavigationButtons';
import { FormData, FormErrors, Step } from './types';

export default function ApplyLoan() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        loanType: '',
        amount: '',
        term: '',
        employmentStatus: '',
        monthlyIncome: '',
        purpose: '',
        comments: '',
        termsAgreed: false
    });

    const [errors, setErrors] = useState<FormErrors>({
        loanType: '',
        amount: '',
        term: '',
        employmentStatus: '',
        monthlyIncome: '',
        purpose: '',
        termsAgreed: ''
    });

    const [attemptedNext, setAttemptedNext] = useState(false);

    const steps: Step[] = [
        { name: 'Loan Details', description: 'Type, amount and term' },
        { name: 'Financial Information', description: 'Employment and income' },
        { name: 'Application Purpose', description: 'Reason for applying' },
    ];

    const validateCurrentStep = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Reset all errors first
        Object.keys(newErrors).forEach(key => {
            newErrors[key as keyof FormErrors] = '';
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
            <Head title="Apply For Loan" />
            <div className="bg-gray-50">
                <div className="container mx-auto px-4 py-12 max-w-4xl">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Loan Application</h1>
                        <p className="mt-3 text-lg text-gray-600">Complete the form below to apply for your loan</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <LoanSteps steps={steps} currentStep={currentStep} />

                        <div className="px-6 py-8">
                            <form onSubmit={handleSubmit}>
                                {currentStep === 0 && (
                                    <LoanDetailsStep
                                        formData={formData}
                                        setFormData={setFormData}
                                        errors={errors}
                                        attemptedNext={attemptedNext}
                                    />
                                )}

                                {currentStep === 1 && (
                                    <FinancialInfoStep
                                        formData={formData}
                                        setFormData={setFormData}
                                        errors={errors}
                                        attemptedNext={attemptedNext}
                                    />
                                )}

                                {currentStep === 2 && (
                                    <PurposeStep
                                        formData={formData}
                                        setFormData={setFormData}
                                        errors={errors}
                                        attemptedNext={attemptedNext}
                                    />
                                )}

                                <NavigationButtons
                                    currentStep={currentStep}
                                    totalSteps={steps.length}
                                    onPrevious={handlePrevStep}
                                    onNext={handleNextStep}
                                />
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