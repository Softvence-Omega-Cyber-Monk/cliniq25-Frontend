import { FC } from 'react';
import Icon from './Icon';
import { StatCardProps } from './types';

const StatCard: FC<StatCardProps> = ({ title, value, percentage, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl flex flex-col justify-between h-full">
    <div className="flex justify-end items-center mb-4">
      <div className="flex items-center space-x-2 p-1.5 rounded-lg bg-emerald-50">
        <Icon name={icon} />
        <span className="text-xs font-semibold text-emerald-600">
          {percentage}%
        </span>
      </div>
    </div>
    <div>
      <h3 className="text-sm text-gray-500 font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

export default StatCard;
