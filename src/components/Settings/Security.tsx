import React from 'react';
import SectionHeader from './SectionHeader';
import InputField from './InputField';
import SaveButton from './SaveButton';

const Security: React.FC = () => (
  <div className="p-8 bg-white rounded-xl shadow-sm mb-8">
    <SectionHeader
      title="Security"
      subtitle="Update your password to keep your account secure."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <InputField label="Current Password" id="currentPassword" type="password" placeholder="Enter current password" />
      {/* Empty slot for layout alignment */}
      <div className='hidden md:block' />
      <InputField label="New Password" id="newPassword" type="password" placeholder="Enter new password" />
      <InputField label="Confirm New Password" id="confirmPassword" type="password" placeholder="Confirm new password" />
    </div>
    <div className="mt-4">
      <SaveButton>Save Changes</SaveButton>
    </div>
  </div>
);

export default Security;
