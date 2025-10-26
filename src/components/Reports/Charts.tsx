import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from 'recharts';

// Mock Data
const sessionTrendsData = [
  { name: 'Jan', Completed: 198, Scheduled: 85, Canceled: 60 },
  { name: 'Feb',
   Completed: 175, Scheduled: 30, Canceled: 15 },
  { name: 'Mar', Completed: 178, Scheduled: 55, Canceled: 35 },
  { name: 'Apr', Completed: 195, Scheduled: 78, Canceled: 45 },
  { name: 'May', Completed: 180, Scheduled: 62, Canceled: 15 },
  { name: 'Jun', Completed: 155, Scheduled: 30, Canceled: 5 },
  { name: 'Jul', Completed: 198, Scheduled: 95, Canceled: 20 },
  { name: 'Aug', Completed: 165, Scheduled: 35, Canceled: 5 },
  { name: 'Sep', Completed: 220, Scheduled: 65, Canceled: 50 },
  { name: 'Oct', Completed: 215, Scheduled: 110, Canceled: 60 },
  { name: 'Nov', Completed: 218, Scheduled: 80, Canceled: 50 },
  { name: 'Dec', Completed: 175, Scheduled: 78, Canceled: 30 },
];

const topTherapistsData = [
  { name: 'Dr. Sarah Mitchell', sessions: 165 },
  { name: 'Dr. James Cooper', sessions: 155 },
  { name: 'Dr. Emily Rodriguez', sessions: 170 },
  { name: 'Dr. Michael Chen', sessions: 148 },
];

const sessionTypeData = [
  { name: 'Individual Therapy', value: 48 },
  { name: 'Group Therapy', value: 18 },
  { name: 'CBT', value: 22 },
  { name: 'DBT', value: 12 },
];

const PIE_COLORS = ['#84CC16', '#3B82F6', '#F97316', '#8B5CF6'];


const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center text-sm text-slate-600">
            <span className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: entry.color }} />
            {entry.value}
          </li>
        ))}
      </ul>
    );
};


export const SessionTrendsChart: React.FC = () => {
    const [timeframe, setTimeframe] = useState('Month');
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-slate-800">Session Trends Over Time</h3>
          <div className="flex rounded-lg bg-slate-100 p-1">
            <button 
              className={`px-3 py-1 text-sm font-semibold rounded-md ${timeframe === 'Week' ? 'bg-white shadow-sm text-teal-500' : 'text-slate-500'}`}
              onClick={() => setTimeframe('Week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 text-sm font-semibold rounded-md ${timeframe === 'Month' ? 'bg-white shadow-sm text-teal-500' : 'text-slate-500'}`}
              onClick={() => setTimeframe('Month')}
            >
              Month
            </button>
          </div>
        </div>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={sessionTrendsData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false}/>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{paddingTop: '20px'}}/>
              <Line type="monotone" dataKey="Completed" stroke="#22c55e" strokeWidth={2} dot={{ r: 4, fill: '#22c55e' }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Scheduled" stroke="#f97316" strokeWidth={2} dot={{ r: 4, fill: '#f97316' }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="Canceled" stroke="#ef4444" strokeWidth={2} dot={{ r: 4, fill: '#ef4444' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
}

export const TopTherapistsChart: React.FC = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Top Therapists</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={topTherapistsData} margin={{ top: 5, right: 0, left: -20, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                        <XAxis 
                          dataKey="name" 
                          angle={-25} 
                          textAnchor="end" 
                          height={60} 
                          tick={{ fill: '#64748b', fontSize: 12 }} 
                          axisLine={{ stroke: '#cbd5e1' }}
                          tickLine={false}
                        />
                        <YAxis tick={{ fill: '#64748b' }} axisLine={{ stroke: '#cbd5e1' }} tickLine={false} />
                        <Tooltip
                            cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Bar dataKey="sessions" fill="#3B82F6" barSize={30} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export const SessionTypeDistributionChart: React.FC = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Session Type Distribution</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={sessionTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                const numericCx = cx as number;
                                const numericCy = cy as number;
                                const numericMidAngle = midAngle as number;
                                const numericInnerRadius = innerRadius as number;
                                const numericOuterRadius = outerRadius as number;
                                const numericPercent = percent as number;

                                const radius = numericInnerRadius + (numericOuterRadius - numericInnerRadius) * 0.5;
                                const x = numericCx + radius * Math.cos(-numericMidAngle * Math.PI / 180);
                                const y = numericCy + radius * Math.sin(-numericMidAngle * Math.PI / 180);
                                return (
                                    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="bold">
                                        {`${(numericPercent * 100).toFixed(0)}%`}
                                    </text>
                                );
                            }}
                        >
                            {sessionTypeData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} stroke="none"/>
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
