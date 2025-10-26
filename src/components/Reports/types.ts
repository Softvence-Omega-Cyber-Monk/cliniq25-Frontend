export interface StatCardProps {
  title: string;
  value: string;
  percentage: number;
  icon: 'clock' | 'users' | 'chart' | 'hourglass';
  iconBgColor: string;
  iconTextColor: string;
}

export interface ReportCardProps {
  title: string;
  description: string;
}
