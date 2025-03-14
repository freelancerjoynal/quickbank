export interface FormData {
    loanType: string;
    amount: string;
    term: string;
    employmentStatus: string;
    monthlyIncome: string;
    purpose: string;
    comments: string;
    termsAgreed: boolean;
}

export interface FormErrors {
    loanType: string;
    amount: string;
    term: string;
    employmentStatus: string;
    monthlyIncome: string;
    purpose: string;
    termsAgreed: string;
}

export interface Step {
    name: string;
    description: string;
}

export interface StepProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    errors: FormErrors;
    attemptedNext: boolean;
}
