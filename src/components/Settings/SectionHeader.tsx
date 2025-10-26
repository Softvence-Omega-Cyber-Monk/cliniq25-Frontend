import React from 'react';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
    <p className="text-sm text-gray-500">{subtitle}</p>
  </div>
);

export default SectionHeader;
