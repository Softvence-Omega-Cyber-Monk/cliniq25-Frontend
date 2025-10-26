import React from 'react';
import { Session, SessionStatus } from './types';
import { CalendarIcon, ClockIcon } from './icons';

interface SessionListItemProps {
  session: Session;
  onViewDetails: (session: Session) => void;
}

const statusStyles: { [key in SessionStatus]: { bg: string; text: string; dot: string } } = {
  [SessionStatus.InProgress]: { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  [SessionStatus.Upcoming]: { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  [SessionStatus.Completed]: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
};

const typeColor: { [key: string]: string } = {
    'Individual Therapy': 'text-cyan-600',
    'Group Therapy': 'text-purple-600',
    'Family Therapy': 'text-indigo-600',
    'Couples Therapy': 'text-rose-600',
    'Psychological Evaluation': 'text-orange-600',
    'Cognitive Behavioral Therapy': 'text-amber-600',
    'Stress Management': 'text-lime-600',
};

const SessionListItem: React.FC<SessionListItemProps> = ({ session, onViewDetails }) => {
  const styles = statusStyles[session.status];
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all hover:shadow-md">
      <div className="flex-1">
        <p className="font-bold text-lg text-gray-800">{session.patientName}</p>
        <p className="text-sm text-gray-500">with {session.therapistName}</p>
      </div>
      <div className="flex-1 flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <span>{session.date}</span>
        </div>
        <div className="flex items-center gap-2">
            <ClockIcon className="h-4 w-4 text-gray-400" />
            <span>{session.time}</span>
        </div>
      </div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${typeColor[session.type] || 'text-gray-600'}`}>{session.type}</p>
      </div>
      <div className="flex-1 flex items-center justify-start md:justify-center">
        <span className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-2 ${styles.bg} ${styles.text}`}>
          <span className={`h-2 w-2 rounded-full ${styles.dot}`}></span>
          {session.status}
        </span>
      </div>
      <div className="flex-1 flex justify-start md:justify-end w-full md:w-auto">
        <button
          onClick={() => onViewDetails(session)}
          className="w-full md:w-auto bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SessionListItem;
