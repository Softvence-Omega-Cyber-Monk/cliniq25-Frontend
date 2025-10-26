import React, { useState, useMemo } from 'react';
import { therapists as mockTherapists, patients as mockPatients } from '../components/Therapists/mockData';
import TherapistListView from '../components/Therapists/TherapistListView';
import TherapistDetailView from '../components/Therapists/TherapistDetailView';
import PatientDetailView from '../components/Therapists/PatientDetailView';

const TherapistsPage: React.FC = () => {
  const [view, setView] = useState('list'); // 'list', 'therapist', 'patient'
  const [selectedTherapistId, setSelectedTherapistId] = useState<string | null>(null);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const handleSelectTherapist = (id: string) => {
    setSelectedTherapistId(id);
    setView('therapist');
  };

  const handleSelectPatient = (id: string) => {
    setSelectedPatientId(id);
    setView('patient');
  };

  const handleBackToList = () => {
    setSelectedTherapistId(null);
    setSelectedPatientId(null);
    setView('list');
  };

  const handleBackToTherapist = () => {
    setSelectedPatientId(null);
    setView('therapist');
  };

  const selectedTherapist = useMemo(() => 
    selectedTherapistId ? mockTherapists.find(t => t.id === selectedTherapistId) : null,
    [selectedTherapistId]
  );

  const selectedPatient = useMemo(() => 
    selectedPatientId ? mockPatients.find(p => p.id === selectedPatientId) : null,
    [selectedPatientId]
  );

  const patientsForSelectedTherapist = useMemo(() => 
    selectedTherapistId ? mockPatients.filter(p => p.therapistId === selectedTherapistId) : [],
    [selectedTherapistId]
  );

  return (
    <div className="p-4 md:p-8 min-h-screen">
      {view === 'list' && 
        <TherapistListView 
          therapists={mockTherapists} 
          onSelectTherapist={handleSelectTherapist} 
        />}
      
      {view === 'therapist' && selectedTherapist && 
        <TherapistDetailView 
          therapist={selectedTherapist} 
          patients={patientsForSelectedTherapist} 
          onSelectPatient={handleSelectPatient} 
          onBack={handleBackToList} 
        />}

      {view === 'patient' && selectedPatient && selectedTherapist && 
        <PatientDetailView 
          patient={selectedPatient} 
          therapist={selectedTherapist} 
          onBack={handleBackToTherapist} 
        />}
    </div>
  );
};

export default TherapistsPage;