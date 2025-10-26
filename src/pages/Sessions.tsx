import React, { useState, useMemo } from 'react';
import { sessions as mockSessions } from '../components/Sessions/mockData';
import SessionListItem from '../components/Sessions/SessionListItem';
import SessionDetailsModal from '../components/Sessions/SessionDetailsModal';
import StatCard from '../components/Sessions/StatCard';
import { Session, SessionStatus } from '../components/Sessions/types';
import { SearchIcon, ChevronDownIcon, TodaysSessionIcon, UpcomingSessionIcon, CompletedSessionIcon, CrisisAlertIcon } from '../components/Sessions/icons';

const SessionsPage: React.FC = () => {
  const [sessions] = useState<Session[]>(mockSessions);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<SessionStatus | 'all'>('all');

  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      const matchesSearch = 
        session.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        session.therapistName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || session.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [sessions, searchTerm, statusFilter]);

  const stats = useMemo(() => ({
    todays: sessions.filter(s => s.date === new Date().toISOString().slice(0, 10)).length,
    upcoming: sessions.filter(s => s.status === SessionStatus.Upcoming).length,
    completed: sessions.filter(s => s.status === SessionStatus.Completed).length,
    crisis: 0, // Replace with actual crisis alert logic
  }), [sessions]);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">New Sessions Page</h1>
        <p className="text-sm text-gray-500">Track, manage, and view details of all therapy sessions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<TodaysSessionIcon className="w-8 h-8 text-blue-500" />} 
          label="Today's Sessions" 
          value={stats.todays} 
        />
        <StatCard 
          icon={<UpcomingSessionIcon className="w-8 h-8 text-yellow-500" />} 
          label="Upcoming Sessions" 
          value={stats.upcoming} 
        />
        <StatCard 
          icon={<CompletedSessionIcon className="w-8 h-8 text-green-500" />} 
          label="Completed This Month" 
          value={stats.completed} 
        />
        <StatCard 
          icon={<CrisisAlertIcon className="w-8 h-8 text-red-500" />} 
          label="Crisis Alerts" 
          value={stats.crisis} 
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by patient or therapist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as SessionStatus | 'all')}
              className="appearance-none w-full md:w-48 pl-4 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value={SessionStatus.Upcoming}>Upcoming</option>
              <option value={SessionStatus.InProgress}>In Progress</option>
              <option value={SessionStatus.Completed}>Completed</option>
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredSessions.map(session => (
          <SessionListItem key={session.id} session={session} onViewDetails={setSelectedSession} />
        ))}
      </div>

      {selectedSession && <SessionDetailsModal session={selectedSession} onClose={() => setSelectedSession(null)} />}
    </div>
  );
};

export default SessionsPage;