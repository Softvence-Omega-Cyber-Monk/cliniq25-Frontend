import React from 'react';
import PlanFeature from './PlanFeature';
import { PlanCardProps } from './types';

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  isPopular,
  features,
  buttonText,
  buttonColor,
}) => (
  <div
    className={`
      flex flex-col p-6 rounded-xl border-2 transition-all duration-300 shadow-lg 
      ${isPopular ? 'border-blue-500 bg-white' : 'border-gray-200 bg-white hover:shadow-xl'}
      relative
    `}
  >
    {isPopular && (
      <span className="absolute top-0 right-0 -mt-3 mr-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-3">
        Popular
      </span>
    )}
    <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    <p className="text-4xl font-extrabold text-gray-900 my-4">
      ${price}
      <span className="text-base font-normal text-gray-500">/month</span>
    </p>
    <p className="text-sm text-gray-500 mb-6">{description}</p>

    <ul className="flex-grow">
      {features.map((feature, index) => (
        <PlanFeature key={index} text={feature.text} isIncluded={feature.isIncluded} />
      ))}
    </ul>

    <button
      className={`
        w-full mt-6 py-3 font-semibold rounded-lg transition duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${buttonColor === 'upgrade'
          ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
          : buttonColor === 'current'
            ? 'bg-emerald-500 text-white cursor-default'
            : 'bg-white text-emerald-500 border-2 border-emerald-500 hover:bg-emerald-50'
        }
      `}
      disabled={buttonColor === 'current'}
    >
      {buttonText}
    </button>
  </div>
);

export default PlanCard;
