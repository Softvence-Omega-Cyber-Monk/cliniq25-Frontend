import React from 'react';
import { Phone, Mail, Video, User, Calendar, Clock, Play } from 'lucide-react';
import { Appointment } from './types';

interface AppointmentCardProps {
  appointment: Appointment;
  onStartSession: (client: Appointment['client']) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onStartSession }) => {
  const { client, date, time, duration, sessionType, scheduleStatus } = appointment;
  const sessionIcon = sessionType === 'Virtual Session' ? <Video size={16} className="text-gray-500" /> : <User size={16} className="text-gray-500" />;

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-mint-200">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center text-sm font-bold mr-3">
              {client.initials}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{client.name}</p>
              <p className="text-sm text-gray-600">{appointment.type}</p>
            </div>
          </div>
          <span className="text-xs font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full">{scheduleStatus}</span>
        </div>

        <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <div className="flex items-center"><Calendar size={16} className="mr-3 text-mint-500" /> <span>{date}</span></div>
          <div className="flex items-center"><Clock size={16} className="mr-3 text-mint-500" /> <span>{time} ({duration} min)</span></div>
          <div className="flex items-center"> {sessionIcon} <span className="ml-3">{sessionType}</span></div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <div className="flex space-x-3 text-gray-500">
          <Phone size={18} className="cursor-pointer hover:text-mint-600 transition"   aria-label="Call" />
          <Mail size={18} className="cursor-pointer hover:text-mint-600 transition" aria-label="Email" />
        </div>
        <button
          onClick={() => onStartSession(client)}
          className="flex items-center px-4 py-2 text-sm font-semibold rounded-full border border-mint-500 text-mint-600 hover:bg-mint-50 transition-colors"
        >
          <Play size={16} className="mr-2" /> Start Session
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
