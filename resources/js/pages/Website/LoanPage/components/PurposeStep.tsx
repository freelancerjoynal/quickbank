import React from 'react';
import { StepProps } from '../types';

export default function PurposeStep({ formData, setFormData, errors, attemptedNext }: StepProps) {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Loan*</label>
                <textarea
                    className={`px-7 w-full min-h-32 rounded-lg shadow-sm py-3 transition-colors ${attemptedNext && errors.purpose ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-500'}`}
                    placeholder="Please describe how you plan to use the loan funds..."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                />
                {attemptedNext && errors.purpose && (
                    <p className="mt-1 text-sm text-red-600">{errors.purpose}</p>
                )}
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
    );
}
