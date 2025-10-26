import  { FC } from 'react';
import { sessionTrendLabels } from './mockData';

const LineChartMock: FC = () => {
  // SVG coordinates based on a 100x100 grid for simplicity
  const dataPoints = [45, 53, 55, 48, 60, 56, 68];
  const maxVal = 80; // Max Y-axis value from the image

  // Function to map data point to SVG Y coordinate (normalized 0-100, inverted)
  const mapToY = (val: number) => 100 - (val / maxVal) * 100;
  // Convert data points to SVG line path
  const pathData = dataPoints.map((val, i) =>
    `${i * (100 / (dataPoints.length - 1))},${mapToY(val)}`
  ).join(' ');

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Session Trend</h2>
      <div className="relative h-64">
        {/* SVG Container for the line chart */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {/* Grid Lines (Mock Y-Axis) */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
          ))}

          {/* Main Line */}
          <polyline
            fill="none"
            stroke="#6366f1" // Indigo for the line color
            strokeWidth="1.5"
            points={pathData}
          />
          {/* Fill Area (Gradient-like effect) */}
          <path
            fill="url(#lineChartGradient)"
            opacity="0.2"
            d={`M0,100 L${pathData} L100,100 Z`}
          />

          {/* Circles for data points */}
          {dataPoints.map((val, i) => (
            <circle
              key={i}
              cx={i * (100 / (dataPoints.length - 1))}
              cy={mapToY(val)}
              r="1"
              fill="#6366f1"
              stroke="white"
              strokeWidth="0.5"
            />
          ))}

          {/* Define Gradient */}
          <defs>
            <linearGradient id="lineChartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* X and Y Axis Labels (HTML/Tailwind for positioning) */}
        <div className="absolute top-0 bottom-0 left-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-1">
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>
        <div className="absolute -bottom-4 left-8 right-0 flex justify-between text-xs text-gray-500 px-1">
          {sessionTrendLabels.map((label, i) => (
            <span key={i} className="w-1/6 text-center">{label}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 text-sm">
        <span className="flex items-center text-gray-500">
          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-1.5"></span>
          sessions
        </span>
      </div>
    </div>
  );
};

export default LineChartMock;
