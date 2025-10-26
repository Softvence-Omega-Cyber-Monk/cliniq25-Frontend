import React, { useState, useMemo } from 'react';
import type { Therapist, Status } from '../Therapists/types';
import { SearchIcon, ChevronDownIcon } from './icons';

interface TherapistCardProps {
  therapist: Therapist;
  onSelect: (id: string) => void;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist, onSelect }) => {
  const statusClasses = therapist.status === 'active' 
    ? 'bg-green-100 text-brand-green' 
    : 'bg-red-100 text-brand-red';

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-lg">
            {therapist.name.split(' ').map(n => n[0]).slice(1, 3).join('')}
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-gray-800">{therapist.name}</h3>
            <p className="text-sm text-brand-gray-500">{therapist.specialty}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 text-sm">
          <div>
            <p className="text-brand-gray-400">Status</p>
            <span className={`px-2 py-1 rounded-full font-medium text-xs ${statusClasses}`}>
              {therapist.status}
            </span>
          </div>
          <div className="text-right">
            <p className="text-brand-gray-400">Patients</p>
            <p className="font-bold text-xl text-brand-gray-800">{therapist.patientCount}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onSelect(therapist.id)}
        className="mt-6 w-full bg-brand-teal text-white font-semibold py-2.5 rounded-lg hover:bg-brand-teal-dark transition-colors duration-300 bg-[#3FDCBF]"
      >
        View Details
      </button>
    </div>
  );
};


interface TherapistListViewProps {
  therapists: Therapist[];
  onSelectTherapist: (id: string) => void;
}

const TherapistListView: React.FC<TherapistListViewProps> = ({ therapists, onSelectTherapist }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');

  const filteredTherapists = useMemo(() => {
    return therapists.filter(therapist => {
      const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || therapist.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [therapists, searchTerm, statusFilter]);

  return (
    <div className="space-y-8">
            <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-gray-800">Therapist Management</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:outline-none"
          />
        </div>
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Status | 'all')}
            className="appearance-none w-full md:w-48 pl-4 pr-10 py-3 bg-gray-100 border border-brand-gray-200 rounded-lg focus:ring-2 focus:ring-brand-teal focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTherapists.map(therapist => (
          <TherapistCard key={therapist.id} therapist={therapist} onSelect={onSelectTherapist} />
        ))}
      </div>
    </div>
  );
};

export default TherapistListView;
