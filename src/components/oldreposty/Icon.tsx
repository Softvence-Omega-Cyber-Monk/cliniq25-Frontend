import { FC } from 'react';
import { StatCardProps } from './types';

const Icon: FC<{ name: StatCardProps['icon'] }> = ({ name }) => {
  let paths;
  switch (name) {
    case 'clock':
      paths = [<path key="c1" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>, <path key="c2" d="M12 7v5l3 3"/>];
      break;
    case 'users':
      paths = [
        <path key="u1" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>,
        <circle key="u2" cx="9" cy="7" r="4"/>,
        <path key="u3" d="M22 21v-2a4 4 0 0 0-3-3.87"/>,
        <path key="u4" d="M16 3.13a4 4 0 0 1 0 7.75"/>
      ];
      break;
    case 'chart':
      paths = [
        <path key="ch1" d="M3 3v18h18"/>,
        <path key="ch2" d="M18 17V9"/>,
        <path key="ch3" d="M13 17V5"/>,
        <path key="ch4" d="M8 17v-3"/>
      ];
      break;
    case 'hourglass':
      paths = [
        <path key="h1" d="M5 2h14"/>,
        <path key="h2" d="M12 12c.9 0 2 1.34 2 3s-1.1 3-2 3c-.9 0-2-1.34-2-3s1.1-3 2-3Z"/>,
        <path key="h3" d="M12 12c-.9 0-2-1.34-2-3s1.1-3 2-3c.9 0 2 1.34 2 3s-1.1 3-2 3Z"/>,
        <path key="h4" d="M5 22h14"/>
      ];
      break;
    default:
      paths = [<path key="d1" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-2.5-3-2.5-3S6 10.62 6 12s2.5 2.5 2.5 2.5z"/>]; // Placeholder
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
      {paths}
    </svg>
  );
};

export default Icon;