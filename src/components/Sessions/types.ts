export enum SessionStatus {
  InProgress = 'In Progress',
  Upcoming = 'Upcoming',
  Completed = 'Completed',
}

export interface Session {
  id: string;
  patientName: string;
  therapistName: string;
  date: string;
  time: string;
  type: string;
  status: SessionStatus;
  notes: string;
  progress: number;
  progressNotes: string;
}
