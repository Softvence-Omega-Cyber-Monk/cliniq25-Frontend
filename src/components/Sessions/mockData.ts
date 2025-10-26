import { Session, SessionStatus } from './types';

export const sessions: Session[] = [
  {
    id: '1',
    patientName: 'John Doe',
    therapistName: 'Dr. Sarah Johnson',
    date: '2024-03-15',
    time: '10:00 AM',
    type: 'Individual Therapy',
    status: SessionStatus.Completed,
    notes: 'Patient reported feeling less anxious this week. We worked on mindfulness techniques.',
    progress: 75,
    progressNotes: 'Significant improvement in managing anxiety triggers.'
  },
  {
    id: '2',
    patientName: 'Jane Smith',
    therapistName: 'Dr. Michael Chen',
    date: '2024-03-18',
    time: '2:00 PM',
    type: 'Group Therapy',
    status: SessionStatus.Upcoming,
    notes: 'Upcoming group session to discuss coping strategies for social anxiety.',
    progress: 40,
    progressNotes: 'Patient is making steady progress in a group setting.'
  },
  {
    id: '3',
    patientName: 'Emily White',
    therapistName: 'Dr. Emily Rodriguez',
    date: '2024-03-20',
    time: '11:00 AM',
    type: 'Family Therapy',
    status: SessionStatus.InProgress,
    notes: 'Family dynamics are complex. Currently working on communication skills.',
    progress: 60,
    progressNotes: 'Improved communication between family members noted.'
  },
  {
    id: '4',
    patientName: 'Michael Brown',
    therapistName: 'Dr. David Lee',
    date: '2024-03-22',
    time: '3:00 PM',
    type: 'Couples Therapy',
    status: SessionStatus.Upcoming,
    notes: 'Next session will focus on conflict resolution techniques.',
    progress: 55,
    progressNotes: 'Couple is actively participating and showing willingness to improve.'
  },
  {
    id: '5',
    patientName: 'Jessica Green',
    therapistName: 'Dr. Jessica Williams',
    date: '2024-03-25',
    time: '9:00 AM',
    type: 'Psychological Evaluation',
    status: SessionStatus.Completed,
    notes: 'Initial evaluation completed. Patient shows signs of moderate depression.',
    progress: 20,
    progressNotes: 'Treatment plan to be developed based on evaluation results.'
  },
];
