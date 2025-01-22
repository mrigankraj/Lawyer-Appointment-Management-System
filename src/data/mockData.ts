import { Lawyer, Appointment } from '../types';

export const mockLawyers: Lawyer[] = [
  {
    id: '1',
    name: 'John Doe',
    specialties: ['Criminal Law', 'Corporate Law'],
    availability: {
      startTime: '09:00',
      endTime: '17:00',
      workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    },
    costPerAppointment: 200,
    imageUrl: '/lawyers/john-doe.jpg',
  },
  {
    id: '2',
    name: 'Jane Smith',
    specialties: ['Family Law', 'Divorce Law'],
    availability: {
      startTime: '10:00',
      endTime: '18:00',
      workingDays: ['Monday', 'Wednesday', 'Friday'],
    },
    costPerAppointment: 150,
    imageUrl: '/lawyers/jane-smith.jpg',
  },
  // Add more mock lawyers as needed
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    lawyerId: '1',
    clientName: 'Alice Johnson',
    clientEmail: 'alice@example.com',
    date: '2025-01-23',
    startTime: '09:00',
    status: 'scheduled',
  },
  // Add more mock appointments as needed
];
