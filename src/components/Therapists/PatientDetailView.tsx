import React, { useState } from 'react';
import type { Patient, Therapist, Session, TreatmentGoal } from './types';
import { UserIcon, MailIcon, HeartIcon, PhoneIcon, DocumentTextIcon, CalendarIcon, ClockIcon } from './icons';
import SessionDetailModal from './SessionDetailModal';

const InfoCard: React.FC<{ icon: React.ReactNode; label: string; value: string; }> = ({ icon, label, value }) => (
    <div className="flex items-start gap-4">
      <div className="bg-brand-teal/10 text-brand-teal p-2 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-brand-gray-500">{label}</p>
        <p className="font-semibold text-brand-gray-800">{value}</p>
      </div>
    </div>
);

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-brand-gray-200 rounded-full h-2.5">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
);

interface PatientDetailViewProps {
  patient: Patient;
  therapist: Therapist;
  onBack: () => void;
}

const PatientDetailView: React.FC<PatientDetailViewProps> = ({ patient, therapist, onBack }) => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-sm text-brand-gray-500">
        <span className="cursor-pointer hover:underline" onClick={onBack}>Therapists</span>
        <span className="mx-2">/</span>
        <span className="cursor-pointer hover:underline" onClick={onBack}>{therapist.name}</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-brand-teal">{patient.name}</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold text-brand-gray-800 mb-6">Patient Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard icon={<UserIcon className="w-5 h-5" />} label="Full Name" value={patient.name} />
          <InfoCard icon={<UserIcon className="w-5 h-5" />} label="Age" value={`${patient.age} years old`} />
          <InfoCard icon={<MailIcon className="w-5 h-5" />} label="Email Address" value={patient.email} />
          <InfoCard icon={<PhoneIcon className="w-5 h-5" />} label="Phone Number" value="+1 (555) 123-4567" />
          <InfoCard icon={<HeartIcon className="w-5 h-5" />} label="Health Issue" value={patient.healthIssue} />
          <InfoCard icon={<PhoneIcon className="w-5 h-5" />} label="Emergency Contact" value={`${patient.emergencyContact.name}, ${patient.emergencyContact.phone}`} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-brand-gray-800">Overall Treatment Progress</h2>
          <span className="text-2xl font-bold text-blue-500">{patient.overallProgress}%</span>
        </div>
        <ProgressBar progress={patient.overallProgress} />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold text-brand-gray-800 mb-6">Treatment Goals</h2>
        <div className="space-y-6">
          {patient.treatmentGoals.map((goal: TreatmentGoal) => (
            <div key={goal.id}>
              <div className="flex justify-between items-center mb-2 text-sm">
                <p className="font-medium text-brand-gray-700">{goal.goal}</p>
                <p className="font-semibold text-brand-gray-500">{goal.progress}%</p>
              </div>
              <ProgressBar progress={goal.progress} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h2 className="text-xl font-bold text-brand-gray-800 mb-6">Session History</h2>
        <div className="space-y-4">
          {patient.sessionHistory.map((session: Session) => (
            <div key={session.id} className="p-4 border border-brand-gray-200 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-4 text-sm font-semibold text-brand-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-brand-gray-400" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-brand-gray-100 px-2 py-0.5 rounded">
                    <ClockIcon className="w-4 h-4 text-brand-gray-500" />
                    <span>{session.duration} min</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DocumentTextIcon className="w-5 h-5 text-brand-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-brand-gray-600 text-sm">{session.summary}</p>
                </div>
              </div>
              <button onClick={() => setSelectedSession(session)} className="bg-brand-teal text-white font-semibold py-1.5 px-4 rounded-lg hover:bg-brand-teal-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal flex-shrink-0 mt-2 md:mt-0">View Session Note</button>
            </div>
          ))}
        </div>
      </div>
      {selectedSession && <SessionDetailModal session={selectedSession} onClose={() => setSelectedSession(null)} />}
    </div>
  );
};

export default PatientDetailView;
