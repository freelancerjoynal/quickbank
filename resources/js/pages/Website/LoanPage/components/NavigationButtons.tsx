import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
    currentStep: number;
    totalSteps: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function NavigationButtons({
    currentStep,
    totalSteps,
    onPrevious,
    onNext
}: NavigationButtonsProps) {
    return (
        <div className="mt-10 flex justify-between">
            <Button
                type="button"
                onClick={onPrevious}
                variant="outline"
                className={`px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 ${currentStep === 0 ? 'invisible' : ''}`}
            >
                Previous
            </Button>

            {currentStep < totalSteps - 1 ? (
                <Button
                    type="button"
                    onClick={onNext}
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
    );
}
