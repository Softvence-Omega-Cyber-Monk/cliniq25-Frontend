import React from 'react';
import { Clock } from 'lucide-react';

// 3. Appointment Data
export const appointmentsData = [
    { name: 'Sarah Johnson', type: 'Initial Assessment', time: '09:00 AM', status: 'confirmed' },
    { name: 'Michael Chen', type: 'Follow-up Session', time: '09:00 AM', status: 'confirmed' },
    { name: 'Emma Davis', type: 'Therapy Session', time: '09:00 AM', status: 'confirmed' },
];

/**
 * AppointmentItem Component
 */
interface AppointmentItemProps {
    data: typeof appointmentsData[0];
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ data }) => {
    const statusColor = data.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';

    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:ring-1 ring-gray-200 dark:ring-gray-700 transition">
            <div className="flex items-center space-x-3">
                {/* Icon */}
                <Clock className="w-5 h-5 text-sky-500/70" />
                
                {/* Details */}
                <div>
                    <p className="font-medium text-gray-800">{data.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{data.type}</p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="font-semibold text-gray-900 ">{data.time}</p>
                <span className={`text-xs font-medium px-2 py-0.5 mt-1 rounded-full ${statusColor}`}>
                    {data.status}
                </span>
            </div>
        </div>
    );
};

export default AppointmentItem;
