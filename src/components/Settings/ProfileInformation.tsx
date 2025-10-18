import React from 'react';
import SectionHeader from './SectionHeader';
import InputField from './InputField';
import SaveButton from './SaveButton';

const ProfileInformation: React.FC = () => (
  <div className="p-8 bg-white rounded-xl shadow-sm mb-8">
    <SectionHeader
      title="Profile Information"
      subtitle="Manage your contact and identity settings."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <InputField label="First Name" id="firstName" value="EL" />
      <InputField label="Last Name" id="lastName" value="Thornton" />
      <InputField label="Email" id="email" type="email" value="e.l.thornton@therapycloud.com" readOnly />
      <InputField label="Phone" id="phone" value="+1 (555) 123-4567" />
      <InputField label="License Number" id="license" value="PSY-12345" />
      {/* Empty slot for layout alignment */}
      <div />
    </div>
    <div className="mt-4">
      <SaveButton>Save Changes</SaveButton>
    </div>
  </div>
);

export default ProfileInformation;
