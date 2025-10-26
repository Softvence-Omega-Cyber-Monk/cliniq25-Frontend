import React from 'react';
import { Session, SessionStatus } from './types';
import { CloseIcon } from './icons';

interface SessionDetailsModalProps {
  session: Session;
  onClose: () => void;
}

const statusStyles: { [key in SessionStatus]: { bg: string; text: string; dot: string } } = {
    [SessionStatus.InProgress]: { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
    [SessionStatus.Upcoming]: { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
    [SessionStatus.Completed]: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  };

const SessionDetailsModal: React.FC<SessionDetailsModalProps> = ({ session, onClose }) => {
  const styles = statusStyles[session.status];
  
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 animate-fade-in-up">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Session Details</h2>
            <p className="text-sm text-gray-500">Detailed information about this therapy session</p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-2 ${styles.bg} ${styles.text}`}>
              <span className={`h-2 w-2 rounded-full ${styles.dot}`}></span>
              {session.status}
            </span>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
          <div>
            <p className="text-gray-500">Date & Time</p>
            <p className="font-semibold text-gray-700">{session.date} at {session.time}</p>
          </div>
          <div>
            <p className="text-gray-500">Session Type</p>
            <p className="font-semibold text-gray-700">{session.type}</p>
          </div>
          <div>
            <p className="text-gray-500">Therapist</p>
            <p className="font-semibold text-gray-700">{session.therapistName}</p>
          </div>
          <div>
            <p className="text-gray-500">Patient</p>
            <p className="font-semibold text-gray-700">{session.patientName}</p>
          </div>
        </div>

        <div className="mb-8">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Session Notes</h3>
            <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-600 text-sm leading-relaxed">{session.notes}</p>
            </div>
        </div>
        
        <div>
            <h3 className="font-bold text-lg text-gray-800 mb-3">Treatment Progress</h3>
            <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                <p className="text-sm font-bold text-teal-600">{session.progress}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${session.progress}%` }}></div>
            </div>
             <p className="text-xs text-gray-500 mt-2">{session.progressNotes}</p>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailsModal;
