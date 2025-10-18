import React, { useState, useCallback } from 'react';
import { Client } from '@/components/Clients/types';
import { MOCK_CLIENTS } from '@/components/Clients/mockData';
import ClientListDashboard from '@/components/Clients/ClientListDashboard';
import ClientDetailView from '@/components/Clients/ClientDetailView';
import UpdateProgressModal from '@/components/Clients/UpdateProgressModal';

const Clients: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectClient = useCallback((client: Client) => {
    setSelectedClient(client);
    window.scrollTo(0, 0); // Scroll to top on navigation
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedClient(null);
    window.scrollTo(0, 0); // Scroll to top on navigation
  }, []);

  const handleUpdateProgress = (notes: string) => {
    console.log('Progress Notes Submitted:', notes);
    // In a real app, you would send this to Firestore/API
    setIsModalOpen(false);
    alert('Progress Note saved successfully!');
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {selectedClient ? (
        <ClientDetailView
          client={selectedClient}
          onBack={handleBackToList}
          onOpenModal={() => setIsModalOpen(true)}
        />
      ) : (
        <ClientListDashboard
          clients={MOCK_CLIENTS}
          onSelectClient={handleSelectClient}
        />
      )}

      {/* Modal is rendered outside the main view components */}
      <UpdateProgressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateProgress}
      />
    </div>
  );
};

export default Clients;
