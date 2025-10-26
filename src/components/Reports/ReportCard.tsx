import { FC } from 'react';
import { ReportCardProps } from './types';

const ReportCard: FC<ReportCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md transition duration-200 hover:shadow-lg border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <button className="flex items-center justify-center space-x-2 bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-emerald-600 transition duration-150 text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span>Download PDF</span>
    </button>
  </div>
);

export default ReportCard;
