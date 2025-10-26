import React from 'react';
import type { Session } from './types';
import { XMarkIcon, CalendarIcon, ClockIcon } from './icons';

interface SessionDetailModalProps {
  session: Session;
  onClose: () => void;
}

const SessionDetailModal: React.FC<SessionDetailModalProps> = ({ session, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-brand-gray-800">Session Details</h2>
          <button onClick={onClose} className="text-brand-gray-400 hover:text-brand-gray-600">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="border-b border-brand-gray-200 pb-4 mb-4">
            <div className="flex items-center gap-6 text-sm font-semibold text-brand-gray-700">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-brand-gray-400" />
                    <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-brand-gray-100 px-2.5 py-1 rounded">
                    <ClockIcon className="w-4 h-4 text-brand-gray-500" />
                    <span>{session.duration} min</span>
                </div>
            </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-gray-700 mb-2">Session Notes</h3>
          <div className="bg-brand-gray-100 p-4 rounded-lg">
            <p className="text-brand-gray-600 leading-relaxed">{session.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetailModal;
