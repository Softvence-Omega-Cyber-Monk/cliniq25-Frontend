export interface StatCardProps {
  title: string;
  value: number | string;
  percentage: number;
  icon: 'clock' | 'users' | 'chart' | 'hourglass';
}

export interface ReportCardProps {
  title: string;
  description: string;
}