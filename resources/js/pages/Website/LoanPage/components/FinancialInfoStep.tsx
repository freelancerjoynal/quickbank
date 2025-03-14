import React from 'react';
import { StepProps } from '../types';

export default function FinancialInfoStep({ formData, setFormData, errors, attemptedNext }: StepProps) {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status*</label>
                <select
                    className={`pl-7 w-full rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.employmentStatus ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
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
    );
}
