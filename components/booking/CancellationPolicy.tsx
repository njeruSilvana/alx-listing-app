import React from 'react';
import { CancellationPolicyProps } from '@/interfaces';

const CancellationPolicy: React.FC<CancellationPolicyProps> = ({ 
  freeCancellationDate = "Aug 23",
  partialRefundDate = "Aug 24",
  rules = [
    "Follow the house rules",
    "Treat your Host's home like your own"
  ]
}) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Free cancellation before {freeCancellationDate}.</span> 
        {' '}Cancel before check-in on {partialRefundDate} for a partial refund.
      </p>
      <p className="text-sm text-gray-500">
        Learn more about cancellation policies
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4">Ground Rules</h2>
      <p className="text-gray-600 mb-3">
        We ask every guest to remember a few simple things about what makes a great guest.
      </p>
      <ul className="text-gray-600 space-y-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CancellationPolicy;