import { Lawyer, Appointment } from '../types';

export const checkLawyerAvailability = (
  lawyer: Lawyer,
  date: string,
  startTime: string
): boolean => {
  // Convert date to day of week
  const appointmentDay = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
  });

  // Check if lawyer works on this day
  if (!lawyer.availability.workingDays.includes(appointmentDay)) {
    return false;
  }

  // Check if time is within working hours
  if (
    startTime < lawyer.availability.startTime ||
    startTime >= lawyer.availability.endTime
  ) {
    return false;
  }

  return true;
};

export const isTimeSlotBooked = (
  appointments: Appointment[],
  lawyerId: string,
  date: string,
  startTime: string
): boolean => {
  return appointments.some(
    (apt) =>
      apt.lawyerId === lawyerId &&
      apt.date === date &&
      apt.startTime === startTime &&
      apt.status === 'scheduled'
  );
};

export const generateTimeSlots = (
  startTime: string,
  endTime: string
): string[] => {
  const slots: string[] = [];
  let currentTime = startTime;

  while (currentTime < endTime) {
    slots.push(currentTime);
    // Add 30 minutes
    const [hours, minutes] = currentTime.split(':').map(Number);
    const newMinutes = minutes + 30;
    const newHours = hours + Math.floor(newMinutes / 60);
    currentTime = `${String(newHours).padStart(2, '0')}:${String(
      newMinutes % 60
    ).padStart(2, '0')}`;
  }

  return slots;
};
