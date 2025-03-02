import {motion} from 'framer-motion';

import { fadeIn } from '@/lib/Animations';
import React, { useState, useEffect } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(10);
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    amortizationSchedule: []
  });

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm, paymentFrequency]);

  const calculateLoan = () => {
    // Convert interest rate from annual percentage to monthly decimal
    const monthlyRate = (interestRate / 100) / 12;

    // Calculate number of payments
    let numberOfPayments;
    if (paymentFrequency === 'monthly') {
      numberOfPayments = loanTerm * 12;
    } else if (paymentFrequency === 'bi-weekly') {
      numberOfPayments = loanTerm * 26;
    } else {
      numberOfPayments = loanTerm * 52;
    }

    // Calculate payment frequency rate
    let paymentRate;
    if (paymentFrequency === 'monthly') {
      paymentRate = monthlyRate;
    } else if (paymentFrequency === 'bi-weekly') {
      paymentRate = (interestRate / 100) / 26;
    } else {
      paymentRate = (interestRate / 100) / 52;
    }

    // Calculate monthly payment using formula: P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    const payment = loanAmount * (paymentRate * Math.pow(1 + paymentRate, numberOfPayments)) / (Math.pow(1 + paymentRate, numberOfPayments) - 1);

    // Calculate total payment and interest
    const totalPayment = payment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    // Generate amortization schedule
    const schedule = [];
    let balance = loanAmount;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;

    for (let i = 1; i <= Math.min(numberOfPayments, 360); i++) {
      const interestPayment = balance * paymentRate;
      const principalPayment = payment - interestPayment;
      balance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;

      if (i <= 12 || i % 12 === 0 || i === numberOfPayments) {
        schedule.push({
          paymentNumber: i,
          payment: payment,
          principalPayment: principalPayment,
          interestPayment: interestPayment,
          totalInterestPaid: totalInterestPaid,
          totalPrincipalPaid: totalPrincipalPaid,
          balance: Math.max(balance, 0)
        });
      }
    }

    setResults({
      monthlyPayment: payment,
      totalPayment: totalPayment,
      totalInterest: totalInterest,
      amortizationSchedule: schedule
    });
  };

  // Format numbers as currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <motion.div
    {...fadeIn}
    className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-black via-yellow-800 to-black px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Loan Calculator</h1>
            <p className="text-blue-100">Calculate your loan payments, interest, and amortization schedule</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900 border-b pb-2">Loan Details</h2>

                {/* Loan Amount */}
                <div>
                  <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount: {formatCurrency(loanAmount)}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$1,000</span>
                    <span>$1,000,000</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.1%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Term: {loanTerm} {loanTerm === 1 ? 'year' : 'years'}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                {/* Payment Frequency */}
                <div>
                  <label htmlFor="payment-frequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Frequency
                  </label>
                  <select
                    id="payment-frequency"
                    value={paymentFrequency}
                    onChange={(e) => setPaymentFrequency(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-900 border-b pb-2">Loan Summary</h2>

                <div className="grid grid-cols-1 gap-4">
                  {/* Payment Amount */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-blue-700">
                      {paymentFrequency === 'monthly' ? 'Monthly' : paymentFrequency === 'bi-weekly' ? 'Bi-weekly' : 'Weekly'} Payment
                    </div>
                    <div className="text-2xl font-bold text-blue-800">
                      {formatCurrency(results.monthlyPayment)}
                    </div>
                  </div>

                  {/* Other Results */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-green-700">Total Principal</div>
                      <div className="text-xl font-bold text-green-800">
                        {formatCurrency(loanAmount)}
                      </div>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="text-sm text-amber-700">Total Interest</div>
                      <div className="text-xl font-bold text-amber-800">
                        {formatCurrency(results.totalInterest)}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg col-span-2">
                      <div className="text-sm text-purple-700">Total Payment</div>
                      <div className="text-xl font-bold text-purple-800">
                        {formatCurrency(results.totalPayment)}
                      </div>
                    </div>
                  </div>

                  {/* Interest vs Principal */}
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Breakdown</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${(loanAmount / results.totalPayment) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-blue-600">{Math.round((loanAmount / results.totalPayment) * 100)}% Principal</span>
                      <span className="text-amber-600">{Math.round((results.totalInterest / results.totalPayment) * 100)}% Interest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amortization Table */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Amortization Schedule</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment #
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Payment
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Principal
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Interest
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Remaining Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.amortizationSchedule.map((row, index) => (
                      <motion.tr
                      key={row.paymentNumber}
                      {...fadeIn}
                      transition={{delay: index * .03}}
                      >
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {row.paymentNumber}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(row.payment)}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(row.principalPayment)}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(row.interestPayment)}
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(row.balance)}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoanCalculator;
