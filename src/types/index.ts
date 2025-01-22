// Define core interfaces
export interface Lawyer {
  id: string;
  name: string;
  specialties: string[];
  availability: {
    startTime: string;
    endTime: string;
    workingDays: string[];
  };
  costPerAppointment: number;
  imageUrl?: string;
}

export interface Appointment {
  id: string;
  lawyerId: string;
  clientName: string;
  clientEmail: string;
  date: string;
  startTime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface AppState {
  lawyers: Lawyer[];
  appointments: Appointment[];
  selectedLawyer: Lawyer | null;
  loading: boolean;
  error: string | null;
}
