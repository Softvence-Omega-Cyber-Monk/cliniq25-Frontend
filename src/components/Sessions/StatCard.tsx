import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  percentageChange?: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, percentageChange }) => {
  const isIncrease = percentageChange && percentageChange > 0;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-start justify-between">
      <div>
        <div className="text-sm text-gray-500 mb-2">{label}</div>
        <div className="text-3xl font-bold text-gray-800">{value}</div>
        {percentageChange && (
          <div className={`text-xs mt-2 flex items-center font-semibold ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isIncrease ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              )}
            </svg>
            {Math.abs(percentageChange)}%
          </div>
        )}
      </div>
      {icon}
    </div>
  );
};

export default StatCard;
