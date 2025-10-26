import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Individual Dashboard</h1>
      {/* Add any other header elements here, e.g., date picker, filters */}
    </div>
  );
};

export default Header;
