import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  delta: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, delta }) => (
  <div className="flex-1 min-w-[150px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition duration-300 hover:shadow-md">
    <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="text-xs font-semibold text-mint-600 bg-mint-50/50 px-2 py-0.5 rounded-full">{delta.toFixed(1)}%</span>
    </div>
    <p className="text-3xl font-bold text-gray-800">{String(value).padStart(2, '0')}</p>
  </div>
);

export default StatCard;
