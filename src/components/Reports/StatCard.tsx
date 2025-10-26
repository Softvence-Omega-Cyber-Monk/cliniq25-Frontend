import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, iconBgColor, iconTextColor }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className={`p-3 rounded-lg ${iconBgColor} ${iconTextColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;