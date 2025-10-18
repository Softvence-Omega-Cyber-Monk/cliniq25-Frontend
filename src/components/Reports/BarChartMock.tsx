import { FC } from 'react';
import { clientProgressData, clientProgressLabels } from './mockData';

const BarChartMock: FC = () => {
  const maxVal = 100;
  // Adjusted bar and gap width calculation for 5 bars: 5 bars * 15% width + 4 gaps * 5% gap = 75% + 20% = 95%. Leaves a 5% margin.
  const barWidth = 15;
  const gap = 5; 

  // Function to map data point to SVG Y coordinate (normalized 0-100, inverted)
  const mapToHeight = (val: number) => (val / maxVal) * 100;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Client Progress Overview</h2>
      <div className="relative h-64">
        {/* SVG Container for the bar chart */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {/* Grid Lines (Mock Y-Axis) */}
          {[0, 25, 50, 75, 100].map(y => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
          ))}

          {clientProgressData.map((val, i) => {
            const height = mapToHeight(val);
            const xPos = i * (barWidth + gap);
            const yPos = 100 - height;
            return (
              <rect
                key={i}
                x={xPos}
                y={yPos}
                width={barWidth}
                height={height}
                fill="#3B82F6" // Blue for the bar color (mocking the color in the image)
                rx="1"
              />
            );
          })}
        </svg>

        {/* X and Y Axis Labels (HTML/Tailwind for positioning) */}
        <div className="absolute top-0 bottom-0 left-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-1">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>
        {/* Adjusted spacing for the x-axis labels to match the bars */}
        <div className="absolute -bottom-4 left-8 right-0 flex justify-between text-xs text-gray-500 px-1">
          {clientProgressLabels.map((label, i) => (
            <span key={i} className="text-center" style={{ width: `${barWidth + gap}%`, marginLeft: `${i === 0 ? 0 : 0}%`, transform: 'translateX(-50%)' }}>
              <span className='inline-block w-[60px] truncate'>{label}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 text-sm">
        <span className="flex items-center text-gray-500">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></span>
          progress
        </span>
      </div>
    </div>
  );
};

export default BarChartMock;
