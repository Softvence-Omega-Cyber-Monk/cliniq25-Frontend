import type { Therapist, Patient } from './types';

const sessionNotes = [
  "We explored various anxiety triggers and engaged in effective breathing exercises. Understanding what causes anxiety can empower us to manage it better. We practiced deep breathing techniques to help calm our minds. These methods can be beneficial in stressful situations. Remember, taking a moment to breathe can make a significant difference.",
  "Discussed mechanisms for stress management. Patient showed good engagement and is making progress towards identifying personal stressors and developing coping strategies.",
  "Reviewed anxiety triggers and practiced breathing techniques. Patient is becoming more adept at recognizing the physical signs of anxiety and applying relaxation methods.",
  "Initial assessment and goal setting. Established a treatment plan focused on cognitive behavioral therapy to address anxiety and sleep issues. Patient is motivated to begin.",
  "Patient reported reduced anxiety levels. Continued CBT exercises and introduced mindfulness practices to further support progress.",
  "Discussed work-related stress and time management strategies. Patient identified key areas for improvement and we brainstormed practical solutions to implement before the next session."
];

const createSessionHistory = (count: number) => {
  const history = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (i * 7));
    history.push({
      id: `session-${i + 1}`,
      date: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      duration: [50, 60][Math.floor(Math.random() * 2)],
      summary: sessionNotes[(i + 1) % sessionNotes.length],
      notes: sessionNotes[i % sessionNotes.length],
    });
  }
  return history;
};

const commonGoals = [
  { id: 'goal-1', goal: 'Reduce anxiety attacks', progress: 75 },
  { id: 'goal-2', goal: 'Improve sleep quality', progress: 65 },
  { id: 'goal-3', goal: 'Develop healthy coping mechanisms', progress: 80 },
  { id: 'goal-4', goal: 'Manage work-related stress', progress: 60 },
];

export const therapists: Therapist[] = [
  { id: 't1', name: 'Dr. Sarah Johnson', specialty: 'Cognitive Behavioral Therapy', status: 'inactive', patientCount: 12, email: 'sjohnson@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 20, avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 't2', name: 'Dr. Michael Chen', specialty: 'Mindfulness Therapy', status: 'inactive', patientCount: 8, email: 'michaelchen@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 24, avatar: 'https://i.pravatar.cc/150?u=michael' },
  { id: 't3', name: 'Dr. Emily Rodriguez', specialty: 'Psychodynamic Therapy', status: 'inactive', patientCount: 15, email: 'erodriguez@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 30, avatar: 'https://i.pravatar.cc/150?u=emily' },
  { id: 't4', name: 'Dr. David Lee', specialty: 'Cognitive Behavioral Therapy', status: 'active', patientCount: 12, email: 'dlee@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 22, avatar: 'https://i.pravatar.cc/150?u=david' },
  { id: 't5', name: 'Dr. Jessica Williams', specialty: 'Cognitive Behavioral Therapy', status: 'inactive', patientCount: 12, email: 'jwilliams@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 18, avatar: 'https://i.pravatar.cc/150?u=jessica' },
  { id: 't6', name: 'Dr. Chris Brown', specialty: 'Cognitive Behavioral Therapy', status: 'active', patientCount: 12, email: 'cbrown@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 25, avatar: 'https://i.pravatar.cc/150?u=chris' },
  { id: 't7', name: 'Dr. Patricia Miller', specialty: 'Cognitive Behavioral Therapy', status: 'inactive', patientCount: 12, email: 'pmiller@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 28, avatar: 'https://i.pravatar.cc/150?u=patricia' },
  { id: 't8', name: 'Dr. Robert Davis', specialty: 'Cognitive Behavioral Therapy', status: 'inactive', patientCount: 12, email: 'rdavis@cliniq.com', phone: '+1 (555) 123-4567', qualifications: 'PhD in Psychology, Certified CBT Therapist', availability: 'Available on weekdays from 9 AM to 5 PM', totalSessionsLast30Days: 15, avatar: 'https://i.pravatar.cc/150?u=robert' },
];

export const patients: Patient[] = [
  { id: 'p1', therapistId: 't2', name: 'Alex Johnson', sessionCount: 4, treatmentProgress: 50, status: 'active', email: 'ajohnson@email.com', healthIssue: 'Anxiety and Stress', age: 30, emergencyContact: { name: 'Jane Johnson', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(5) },
  { id: 'p2', therapistId: 't2', name: 'Emily Carter', sessionCount: 15, treatmentProgress: 50, status: 'active', email: 'ecarter@email.com', healthIssue: 'Anxiety and Stress', age: 28, emergencyContact: { name: 'John Carter', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(8) },
  { id: 'p3', therapistId: 't2', name: 'Michael Smith', sessionCount: 7, treatmentProgress: 50, status: 'active', email: 'msmith@email.com', healthIssue: 'Anxiety and Stress', age: 35, emergencyContact: { name: 'Susan Smith', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(7) },
  { id: 'p4', therapistId: 't2', name: 'Sophia Brown', sessionCount: 3, treatmentProgress: 50, status: 'inactive', email: 'sbrown@email.com', healthIssue: 'Anxiety and Stress', age: 22, emergencyContact: { name: 'David Brown', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(3) },
  { id: 'p5', therapistId: 't2', name: 'Liam Davis', sessionCount: 6, treatmentProgress: 50, status: 'active', email: 'ldavis@email.com', healthIssue: 'Anxiety and Stress', age: 40, emergencyContact: { name: 'Olivia Davis', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(6) },
  { id: 'p6', therapistId: 't2', name: 'Olivia Wilson', sessionCount: 3, treatmentProgress: 50, status: 'active', email: 'owilson@email.com', healthIssue: 'Anxiety and Stress', age: 31, emergencyContact: { name: 'James Wilson', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(3) },
  { id: 'p7', therapistId: 't2', name: 'James Taylor', sessionCount: 8, treatmentProgress: 50, status: 'inactive', email: 'jtaylor@email.com', healthIssue: 'Anxiety and Stress', age: 29, emergencyContact: { name: 'Mary Taylor', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(8) },
  { id: 'p8', therapistId: 't2', name: 'Isabella Martinez', sessionCount: 6, treatmentProgress: 50, status: 'active', email: 'imartinez@email.com', healthIssue: 'Anxiety and Stress', age: 26, emergencyContact: { name: 'Jose Martinez', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(6) },
  { id: 'p9', therapistId: 't2', name: 'Ethan Anderson', sessionCount: 11, treatmentProgress: 50, status: 'inactive', email: 'eanderson@email.com', healthIssue: 'Anxiety and Stress', age: 33, emergencyContact: { name: 'Linda Anderson', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(11) },
  { id: 'p10', therapistId: 't2', name: 'Ava Thomas', sessionCount: 9, treatmentProgress: 50, status: 'active', email: 'athomas@email.com', healthIssue: 'Anxiety and Stress', age: 27, emergencyContact: { name: 'Robert Thomas', phone: '+1 (555) 987-6543' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(9) },
  // Add patients for other therapists
  { id: 'p11', therapistId: 't1', name: 'Sarah Johnson', sessionCount: 5, treatmentProgress: 60, status: 'active', email: 'sjohnson.patient@email.com', healthIssue: 'Anxiety and Stress', age: 30, emergencyContact: { name: 'John Smith', phone: '+1 (555) 123-4567' }, overallProgress: 70, treatmentGoals: commonGoals, sessionHistory: createSessionHistory(5) },
];
