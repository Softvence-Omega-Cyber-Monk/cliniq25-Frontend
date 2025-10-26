import { StatCardProps, ReportCardProps } from './types';

export const statsData: StatCardProps[] = [
  { title: "Total Sessions", value: "328", percentage: 12.3, icon: 'clock', iconBgColor: "bg-blue-100", iconTextColor: "text-blue-600" },
  { title: "Active Clients", value: "24", percentage: 12.3, icon: 'users', iconBgColor: "bg-green-100", iconTextColor: "text-green-600" },
  { title: "Avg. Progress", value: "78%", percentage: 12.3, icon: 'chart', iconBgColor: "bg-yellow-100", iconTextColor: "text-yellow-600" },
  { title: "Session Hours", value: "246", percentage: 12.3, icon: 'hourglass', iconBgColor: "bg-red-100", iconTextColor: "text-red-600" },
];

export const reportsData: ReportCardProps[] = [
  { title: "Client Progress Summary", description: "Comprehensive overview of all active client treatment progress" },
  { title: "Session Logs", description: "Detailed logs of all therapy sessions with notes" },
  { title: "Monthly Analytics", description: "Monthly breakdown of sessions, clients, and trends" },
  { title: "Crisis Interventions", description: "Report of all crisis alerts and interventions" },
];

// Mock data for charts (simplified)
export const sessionTrendLabels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
export const clientProgressData = [85, 70, 68, 92, 75];
export const clientProgressLabels = ['Sarah J.', 'Michael C.', 'Emma D.', 'James W.', 'Lisa A.'];
