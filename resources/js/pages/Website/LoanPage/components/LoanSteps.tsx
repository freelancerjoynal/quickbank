import React from 'react';
import { Step } from '../types';

interface LoanStepsProps {
    steps: Step[];
    currentStep: number;
}

export default function LoanSteps({ steps, currentStep }: LoanStepsProps) {
    return (
        <div className="border-b border-gray-200">
            <nav className="mx-auto px-6 py-4">
                <ol className="grid lg:grid-cols-3 items-center justify-between w-full">
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
    );
}
