import React from 'react';
import { StepProps } from '../types';

export default function LoanDetailsStep({ formData, setFormData, errors, attemptedNext }: StepProps) {
    return (
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
                        className={`pl-7 w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.term ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
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
    );
}
