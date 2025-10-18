import React from 'react';
import SectionHeader from './SectionHeader';
import SaveButton from './SaveButton';

const Preferences: React.FC = () => (
  <div className="p-8 bg-white rounded-xl shadow-sm mb-8">
    <SectionHeader
      title="Preferences"
      subtitle="Customize default settings for your practice."
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 items-end">
      {/* Session Duration */}
      <div className="flex flex-col">
        <label htmlFor="sessionDuration" className="text-sm font-medium text-gray-500 mb-1">
          Session Duration Default
        </label>
        <div className="relative">
          <select
            id="sessionDuration"
            defaultValue="60"
            className="w-full appearance-none px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-150"
          >
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
          </select>
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Applies to new appointments.
        </p>
      </div>

      {/* Working Hours */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 mb-1">
            Working Hours
          </label>
          <p className="text-sm text-gray-700">9:00 AM - 5:00 PM</p>
        </div>
        <button
          className="text-blue-500 font-semibold py-2 px-4 rounded-lg border border-blue-500 hover:bg-blue-50 transition duration-200 text-sm"
        >
          Configure
        </button>
      </div>

      {/* Time Zone */}
      <div className="flex justify-between items-end sm:col-span-2">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-500 mb-1">
            Time Zone
          </label>
          <p className="text-sm text-gray-700">Current: Standard Time (PST)</p>
        </div>
        <SaveButton color='bg-blue-500' className='!py-2 !px-4 text-sm'>
          Change
        </SaveButton>
      </div>
    </div>
  </div>
);

export default Preferences;
