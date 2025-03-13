export default function FAQSection() {
    return (
        <div className="border-t border-gray-200 bg-gray-50 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-8 text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">What documents do I need to apply?</h3>
                        <p className="text-gray-600">
                            To apply for a loan, you'll need valid ID, proof of income (such as pay stubs or tax returns), bank statements from the
                            last 3 months, and proof of address.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">How long does approval take?</h3>
                        <p className="text-gray-600">
                            Most applications are processed within 1-3 business days. Once approved, funds can be disbursed to your account within 24
                            hours.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">Are there any prepayment penalties?</h3>
                        <p className="text-gray-600">
                            No, Quick Bank does not charge prepayment penalties. You're free to pay off your loan early without incurring additional
                            fees.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-3 text-lg font-semibold text-gray-800">What credit score do I need?</h3>
                        <p className="text-gray-600">
                            While we consider multiple factors for approval, a credit score of 650 or higher typically qualifies for our best rates.
                            Lower scores may still be eligible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
