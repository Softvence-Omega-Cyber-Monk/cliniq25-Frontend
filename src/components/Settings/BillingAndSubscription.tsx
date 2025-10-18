import React from 'react';
import SectionHeader from './SectionHeader';
import PlanCard from './PlanCard';
import { PlanCardProps } from './types';

const BillingAndSubscription: React.FC = () => {
  const plans: PlanCardProps[] = [
    {
      title: 'Basic',
      price: 29,
      description: 'Perfect for starting your practice',
      isPopular: false,
      features: [
        { text: 'Up to 15 Clients', isIncluded: true },
        { text: 'Standard scheduling', isIncluded: true },
        { text: 'Basic reporting', isIncluded: true },
        { text: 'Email support', isIncluded: true },
        { text: 'Customizable intake forms', isIncluded: false },
        { text: 'Full analytics & reports', isIncluded: false },
        { text: 'Dedicated account manager', isIncluded: false },
        { text: 'Priority support', isIncluded: false },
      ],
      buttonText: 'Downgrade',
      buttonColor: 'downgrade',
    },
    {
      title: 'Professional',
      price: 49,
      description: 'The standard choice for growing solo practices.',
      isPopular: true,
      features: [
        { text: 'Up to 50 Clients', isIncluded: true },
        { text: 'All basic features', isIncluded: true },
        { text: 'Customizable intake forms', isIncluded: true },
        { text: 'Full analytics & reports', isIncluded: true },
        { text: 'Dedicated account manager', isIncluded: false },
        { text: 'Priority support', isIncluded: false },
      ],
      buttonText: 'Current Plan',
      buttonColor: 'current',
    },
    {
      title: 'Premium',
      price: 79,
      description: 'Best for established practices and small teams.',
      isPopular: false,
      features: [
        { text: 'Unlimited Clients', isIncluded: true },
        { text: 'All Professional features', isIncluded: true },
        { text: 'AI-powered insights', isIncluded: true },
        { text: 'Dedicated account manager', isIncluded: true },
        { text: 'Priority support', isIncluded: true },
      ],
      buttonText: 'Upgrade',
      buttonColor: 'upgrade',
    },
  ];

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm mb-8">
      <SectionHeader
        title="Billing & Subscription"
        subtitle="View and manage your current billing cycle and plan."
      />

      {/* Current Plan Banner */}
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-emerald-800">Professional Plan</p>
            <p className="text-sm text-emerald-700">
              $49/month - Renews June 1, 2024
            </p>
          </div>
          <span className="text-sm font-semibold text-emerald-700 bg-emerald-200 px-3 py-1 rounded-full">
            ACTIVE
          </span>
        </div>
      </div>

      <h3 className="text-md font-semibold text-gray-700 mb-4">Available Plans</h3>
      
      {/* Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>

      {/* Bottom Links */}
      <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-500 justify-center lg:justify-start">
        <button className="text-blue-600 hover:text-blue-800 transition">
          Update Payment Method
        </button>
        <span className="hidden lg:inline">|</span>
        <button className="text-blue-600 hover:text-blue-800 transition">
          View Invoices
        </button>
        <span className="hidden lg:inline">|</span>
        <button className="text-blue-600 hover:text-blue-800 transition">
          Cancel Subscription
        </button>
      </div>
    </div>
  );
};

export default BillingAndSubscription;
