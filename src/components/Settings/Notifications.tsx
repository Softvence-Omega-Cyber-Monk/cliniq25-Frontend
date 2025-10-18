import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ToggleSwitch from './ToggleSwitch';

const Notifications: React.FC = () => {
  const [sessionReminders, setSessionReminders] = useState(true);
  const [crisisAlerts, setCrisisAlerts] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [monthlyReports, setMonthlyReports] = useState(true);

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm mb-8">
      <SectionHeader
        title="Notifications"
        subtitle="Configure how you receive updates and warnings."
      />
      <ToggleSwitch
        id="sessionReminders"
        label="Session Reminders"
        subText="Reminders for upcoming sessions."
        checked={sessionReminders}
        onChange={setSessionReminders}
      />
      <ToggleSwitch
        id="crisisAlerts"
        label="Crisis Alerts"
        subText="Immediate notification for crisis situations."
        checked={crisisAlerts}
        onChange={setCrisisAlerts}
      />
      <ToggleSwitch
        id="emailNotif"
        label="Email Notifications"
        subText="Receive updates about client appointments."
        checked={emailNotif}
        onChange={setEmailNotif}
      />
      <ToggleSwitch
        id="monthlyReports"
        label="Monthly Reports"
        subText="Get monthly summary of your practice."
        checked={monthlyReports}
        onChange={setMonthlyReports}
      />
    </div>
  );
};

export default Notifications;
