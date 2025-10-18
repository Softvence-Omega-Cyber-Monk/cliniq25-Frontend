import React from 'react';
import { AlertTriangle } from 'lucide-react';

// 2. Alert Data
export const sessionAlertsData = [
    { name: 'Emma Davis', alert: 'Crisis alert', message: 'Crisis alert flagged in last session', time: '2 hours ago', severity: 'crisis' },
    { name: 'Sarah Johnson', alert: 'Report Pending', message: 'Assessment report pending', time: '1 day ago', severity: 'pending' },
];

/**
 * SessionAlert Component
 */
interface SessionAlertProps {
    data: typeof sessionAlertsData[0];
}

const SessionAlert: React.FC<SessionAlertProps> = ({ data }) => {
    const isCrisis = data.severity === 'crisis';
    
    const iconColor = isCrisis ? 'text-red-600' : 'text-orange-500';
    const alertBg = isCrisis ? 'bg-red-50 dark:bg-red-900/20' : 'bg-gray-50 dark:bg-gray-800/50';
    const crisisBadge = isCrisis ? (
        <span className="ml-3 text-xs font-semibold text-white bg-red-500 px-2 py-0.5 rounded-full">
            {data.alert}
        </span>
    ) : null;

    return (
        <div className={`p-5 rounded-xl ${alertBg} flex items-start space-x-4 shadow-sm`}>
            <AlertTriangle className={`w-5 h-5 mt-0.5 ${iconColor}`} />
            <div className="flex-1">
                <div className="flex items-center">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{data.name}</p>
                    {crisisBadge}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{data.message}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{data.time}</p>
            </div>
        </div>
    );
};

export default SessionAlert;
