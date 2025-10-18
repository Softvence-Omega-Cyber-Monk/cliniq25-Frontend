import React, { useState, useEffect } from 'react';
import { Phone, Mail, Play, Square} from 'lucide-react';
import { Client } from './types';

interface SessionViewProps {
  client: Client;
  onEndSession: () => void;
}

const SessionView: React.FC<SessionViewProps> = ({ client, onEndSession }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);

    // Timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    const formatTime = (totalSeconds: number) => {
        const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const s = String(totalSeconds % 60).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const handleEnd = () => {
        if (isRunning) setIsRunning(false);
        // In a real app, this would save session data
        onEndSession();
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            {/* Breadcrumbs */}
            <nav className="text-sm font-medium text-gray-500 mb-6">
                Clients / <span className="text-mint-600">{client.name}</span>
            </nav>

            {/* Client Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-4xl mx-auto border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center text-3xl font-bold mr-4 shrink-0">
                                {client.initials}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {client.name}{' '}
                                    <span className="text-xs font-medium text-green-800 bg-green-100 px-3 py-1 ml-2 rounded-full capitalize">
                                        {client.status}
                                    </span>
                                </h1>
                                <p className="flex items-center text-gray-600 mt-1"><Mail size={16} className="mr-2 text-gray-400" /> {client.email}</p>
                                <p className="flex items-center text-gray-600"><Phone size={16} className="mr-2 text-gray-400" /> {client.phone}</p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-base font-semibold text-gray-700 mb-2">Health Issues</h2>
                            <div className="flex flex-wrap gap-2">
                                {client.healthIssues.map((issue) => (
                                    <span key={issue} className="text-sm font-medium text-blue-800 bg-blue-100 px-4 py-2 rounded-full">
                                        {issue}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Session Controls */}
                    <div className="md:ml-8 mt-6 md:mt-0 flex flex-col space-y-3 justify-start items-end">
                        <div className={`w-full max-w-[250px] p-4 text-center rounded-xl border-2 ${isRunning ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                            <p className="text-sm font-medium text-gray-600 mb-1">Session in Progress</p>
                            <div className={`text-4xl font-bold ${isRunning ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                                {formatTime(seconds)}
                            </div>
                        </div>

                        <div className="flex space-x-3 w-full max-w-[250px]">
                            <button
                                onClick={() => setIsRunning(!isRunning)}
                                className={`flex-1 flex items-center justify-center px-4 py-3 font-semibold rounded-xl transition-all shadow-md ${
                                    isRunning
                                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                        : 'bg-mint-100 text-mint-700 hover:bg-mint-200'
                                }`}
                                title={isRunning ? 'Pause' : 'Play'}
                            >
                                {isRunning ? <Square size={20} /> : <Play size={20} />}
                            </button>
                            <button
                                onClick={handleEnd}
                                className="flex-1 flex items-center justify-center px-4 py-3 font-semibold rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors shadow-md"
                            >
                                <Square size={20} className="mr-2" /> End
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add more session details/notes area here in a real application */}
        </div>
    );
};

export default SessionView;
