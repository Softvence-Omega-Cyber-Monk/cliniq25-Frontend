import React, { useState } from 'react';
import { ChevronDown, Plus, Trash2, Save, Upload, CheckCircle, Clock } from 'lucide-react';

// --- Type Definitions ---

interface SessionCategory {
  id: number;
  name: string;
  description: string;
  count: number;
}

interface LoginHistoryEntry {
  id: number;
  user: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

interface ContactInfo {
    email: string;
    phone: string;
}

// --- Mock Data ---

const MOCK_CATEGORIES: SessionCategory[] = [
  { id: 1, name: 'Individual Therapy', description: '352 sessions assigned', count: 352 },
  { id: 2, name: 'Group Therapy', description: '19 sessions assigned', count: 19 },
  { id: 3, name: 'Cognitive Behavioral Therapy (CBT)', description: '88 sessions assigned', count: 88 },
  { id: 4, name: 'Dialectical Behavior Therapy (DBT)', description: '24 sessions assigned', count: 24 },
];

const MOCK_LOGIN_HISTORY: LoginHistoryEntry[] = [
  { id: 101, user: 'Admin User', lastLogin: '2 hours ago', status: 'active' },
  { id: 102, user: 'Dr. Sarah Mitchell', lastLogin: '2 days ago', status: 'active' },
  { id: 103, user: 'Dr. Umesh Mishra', lastLogin: '4 days ago', status: 'active' },
  { id: 104, user: 'Dr. James Cooper', lastLogin: '1 week ago', status: 'inactive' },
];

// --- Reusable Components ---

const PrimaryButton: React.FC<{ children: React.ReactNode; onClick: () => void; icon?: React.ReactNode; className?: string }> = ({ children, onClick, icon, className = '' }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors duration-150 ${className}`}
  >
    {icon}
    <span>{children}</span>
  </button>
);

const ToggleSwitch: React.FC<{ label: string; subLabel?: string; checked: boolean; onChange: (checked: boolean) => void }> = ({ label, subLabel, checked, onChange }) => (
  <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
    <div className="flex-grow pr-4">
      <div className="text-sm font-medium text-gray-700">{label}</div>
      {subLabel && <div className="text-xs text-gray-500 mt-0.5">{subLabel}</div>}
    </div>
    <label htmlFor={label} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id={label}
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`block ${checked ? 'bg-teal-500' : 'bg-gray-300'} w-10 h-6 rounded-full transition`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`}></div>
      </div>
    </label>
  </div>
);

const SettingSection: React.FC<{ title: string; children: React.ReactNode; actionButton?: React.ReactNode }> = ({ title, children, actionButton }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4 mt-8">
      <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1 w-full">{title}</h2>
      {actionButton}
    </div>
    {children}
  </div>
);

const SelectInput: React.FC<{ label: string; options: string[]; value: string; onChange: (value: string) => void; className?: string }> = ({ label, options, value, onChange, className = 'w-1/2' }) => (
  <div className={`p-4 ${className}`}>
    <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-3 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 cursor-pointer transition-colors"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const TextInput: React.FC<{ label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; className?: string }> = ({ label, value, onChange, placeholder, type = 'text', className = 'w-full' }) => (
    <div className={className}>
        <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
        />
    </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  // 1. System Configuration States
  const [timeZone, setTimeZone] = useState('Eastern Time (EST)');
  const [platformLang, setPlatformLang] = useState('English');
  const [notifications, setNotifications] = useState({
    email: true,
    session: true,
    crisis: false,
  });

  // 2. Session Categories State (Simplified)
  const [categories] = useState(MOCK_CATEGORIES);

  // 3. Security Settings States
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [minPasswordLength, setMinPasswordLength] = useState('8 characters');
  const [passwordExpiration, setPasswordExpiration] = useState('90 days');

  // 4. Change Password States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterNewPassword, setReEnterNewPassword] = useState('');

  // 5. Contact Information State
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: 'abc@gmail.com',
    phone: '+123 3455 565 656',
  });

  // 6. Platform Branding
  const [platformName, setPlatformName] = useState('CLINIC');
  
  const handleSave = (section: string) => {
      console.log(`Saving ${section} settings...`);
      // In a real application, this would trigger an API call.
  };

  const LoginHistoryItem: React.FC<{ entry: LoginHistoryEntry }> = ({ entry }) => {
    const statusColor = entry.status === 'active' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-yellow-100 text-yellow-700 border-yellow-300';
    const statusText = entry.status === 'active' ? 'Active' : 'Inactive';
    const StatusIcon = entry.status === 'active' ? CheckCircle : Clock;

    return (
      <div className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
        <div className="flex-grow">
          <div className="text-sm font-medium text-gray-700">{entry.user}</div>
          <div className="text-xs text-gray-500 mt-0.5">Last login: {entry.lastLogin}</div>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-0.5 text-xs font-semibold rounded-full border ${statusColor}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{statusText}</span>
        </div>
      </div>
    );
  };
  
  const CategoryItem: React.FC<{ category: SessionCategory }> = ({ category }) => (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-3">
        <div className="flex flex-col">
            <div className="text-sm font-semibold text-gray-800">{category.name}</div>
            <div className="text-xs text-gray-500">{category.description}</div>
        </div>
        <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 font-medium">{category.count}</div>
            <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label={`Delete ${category.name}`}>
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">

        {/* --- Header --- */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Platform Settings</h1>
          <PrimaryButton onClick={() => handleSave('All')} icon={<Save className="w-4 h-4" />}>
            Save Changes
          </PrimaryButton>
        </div>
        <p className="text-sm text-gray-500 mt-2">
            Configure system preferences, security, and platform features.
        </p>

        {/* --- 1. System Configuration --- */}
        <SettingSection title="System Configuration">
            <div className="flex flex-col sm:flex-row -m-4">
                <SelectInput
                    label="Time Zone"
                    options={['Eastern Time (EST)', 'Central Time (CST)', 'Pacific Time (PST)']}
                    value={timeZone}
                    onChange={setTimeZone}
                    className="w-full sm:w-1/2"
                />
                <SelectInput
                    label="Platform Language"
                    options={['English', 'Spanish', 'French']}
                    value={platformLang}
                    onChange={setPlatformLang}
                    className="w-full sm:w-1/2"
                />
            </div>

            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-3">Notification Preferences</h3>
            <div className="bg-white border border-gray-100 rounded-lg divide-y divide-gray-100 p-4">
                <ToggleSwitch
                    label="Email Notifications"
                    subLabel="Send email notifications for important alerts."
                    checked={notifications.email}
                    onChange={(c) => setNotifications({ ...notifications, email: c })}
                />
                <ToggleSwitch
                    label="Session Reminders"
                    subLabel="Send automated reminders for upcoming sessions."
                    checked={notifications.session}
                    onChange={(c) => setNotifications({ ...notifications, session: c })}
                />
                <ToggleSwitch
                    label="Crisis Alerts"
                    subLabel="Immediate notifications for high-risk situations."
                    checked={notifications.crisis}
                    onChange={(c) => setNotifications({ ...notifications, crisis: c })}
                />
            </div>
        </SettingSection>

        <SettingSection
            title={`Session Categories (${categories.length})`}
            actionButton={
               <PrimaryButton 
    onClick={() => console.log('Add Category')} 
    icon={<Plus className="w-4 h-4" />} 
    className="!bg-green-500 hover:!bg-green-600 py-1 px-3 rounded-full text-white text-sm font-semibold">
    Add Category
</PrimaryButton>

            }
        >
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                {categories.map(cat => <CategoryItem key={cat.id} category={cat} />)}
            </div>
            <p className="text-xs text-gray-500 mt-3 p-1">
                Note: Categories with assigned sessions cannot be deleted. Please reassign sessions before removing a category.
            </p>
        </SettingSection>

        {/* --- 3. Security Settings --- */}
        <SettingSection title="Security Settings">
            {/* Two Factor Auth */}
            <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm mb-6">
                <ToggleSwitch
                    label="Two-Factor Authentication (2FA)"
                    subLabel="Require 2FA for all admin and therapist accounts."
                    checked={twoFactorEnabled}
                    onChange={setTwoFactorEnabled}
                />
            </div>

            {/* Password Policies */}
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-3">Password Policies</h3>
            <div className="flex flex-col sm:flex-row -m-4">
                <SelectInput
                    label="Minimum Password Length"
                    options={['8 characters', '10 characters', '12 characters']}
                    value={minPasswordLength}
                    onChange={setMinPasswordLength}
                    className="w-full sm:w-1/2"
                />
                <SelectInput
                    label="Password Expiration"
                    options={['90 days', '60 days', '180 days']}
                    value={passwordExpiration}
                    onChange={setPasswordExpiration}
                    className="w-full sm:w-1/2"
                />
            </div>

            {/* Login History */}
            <h3 className="text-md font-semibold text-gray-700 mt-6 mb-3">Login History</h3>
            <div className="p-4 bg-white border border-gray-100 rounded-lg divide-y divide-gray-100 shadow-sm">
                {MOCK_LOGIN_HISTORY.map(entry => <LoginHistoryItem key={entry.id} entry={entry} />)}
            </div>
        </SettingSection>

        {/* --- 4. Change Password --- */}
        <SettingSection title="Change Password">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TextInput
                    label="Current Password"
                    type="password"
                    value={currentPassword}
                    onChange={setCurrentPassword}
                    placeholder="***********"
                />
                <TextInput
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={setNewPassword}
                    placeholder="***********"
                />
                <TextInput
                    label="Re-type New Password"
                    type="password"
                    value={reEnterNewPassword}
                    onChange={setReEnterNewPassword}
                    placeholder="***********"
                />
            </div>
            <div className="mt-4">
                <PrimaryButton onClick={() => handleSave('Password')}>
                    Save Password
                </PrimaryButton>
            </div>
        </SettingSection>

        {/* --- 5. Contact Information --- */}
        <SettingSection title="Contact Information">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                    label="Email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e})}
                    placeholder="abc@gmail.com"
                />
                <TextInput
                    label="Phone Number"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e})}
                    placeholder="+123 3455 565 656"
                />
            </div>
            <div className="mt-4">
                <PrimaryButton onClick={() => handleSave('Contact Info')}>
                    Save Changes
                </PrimaryButton>
            </div>
        </SettingSection>

        {/* --- 6. Platform Branding --- */}
        <SettingSection title="Platform Branding">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                    label="Platform Name"
                    value={platformName}
                    onChange={setPlatformName}
                    placeholder="CLINIC"
                />
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <PrimaryButton onClick={() => console.log('Upload Logo')} icon={<Upload className="w-4 h-4" />}>
                    Upload Logo
                </PrimaryButton>
                <span className="text-xs text-gray-500">
                    Max file size: 5MB. PNG or SVG.
                </span>
            </div>
        </SettingSection>

        {/* Footer/Version Info */}
        <div className="mt-10 pt-4 border-t border-gray-200 text-xs text-gray-400 text-center">
            App Version: 1.0.0. Last Updated: Oct 2025.
        </div>
      </div>
    </div>
  );
};

export default App;
