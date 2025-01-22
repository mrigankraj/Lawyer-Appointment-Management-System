import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { addAppointment } from '../store/appointmentsSlice';
import { checkLawyerAvailability, isTimeSlotBooked, generateTimeSlots } from '../utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Toast } from '@/components/ui/toast';

const LawyerDetail = () => {
  const dispatch = useAppDispatch();
  const selectedLawyer = useAppSelector((state) => state.lawyers.selectedLawyer);
  const appointments = useAppSelector((state) => state.appointments.appointments);

  const [bookingData, setBookingData] = useState({
    clientName: '',
    clientEmail: '',
    date: '',
    startTime: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  if (!selectedLawyer) return null;

  const availableTimeSlots = generateTimeSlots(
    selectedLawyer.availability.startTime,
    selectedLawyer.availability.endTime
  ).filter(
    (time) =>
      checkLawyerAvailability(selectedLawyer, bookingData.date, time) &&
      !isTimeSlotBooked(appointments, selectedLawyer.id, bookingData.date, time)
  );

  const handleBooking = () => {
    if (!checkLawyerAvailability(selectedLawyer, bookingData.date, bookingData.startTime)) {
      setToastMessage('Lawyer is not available at this time');
      setShowToast(true);
      return;
    }

    const appointment = {
      id: Date.now().toString(),
      lawyerId: selectedLawyer.id,
      ...bookingData,
      status: 'scheduled' as const,
    };

    dispatch(addAppointment(appointment));
    setToastMessage('Appointment booked successfully!');
    setShowToast(true);
    setBookingData({
      clientName: '',
      clientEmail: '',
      date: '',
      startTime: '',
    });
  };

  const lawyerAppointments = appointments.filter(
    (apt) => apt.lawyerId === selectedLawyer.id
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{selectedLawyer.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label>Client Name</Label>
                <Input
                  value={bookingData.clientName}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, clientName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Client Email</Label>
                <Input
                  type="email"
                  value={bookingData.clientEmail}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, clientEmail: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Date</Label>
                <Calendar
                  mode="single"
                  selected={new Date(bookingData.date)}
                  onSelect={(date) =>
                    setBookingData({
                      ...bookingData,
                      date: date?.toISOString().split('T')[0] || '',
                    })
                  }
                  disabled={(date) =>
                    !selectedLawyer.availability.workingDays.includes(
                      date.toLocaleDateString('en-US', { weekday: 'long' })
                    )
                  }
                />
              </div>
              <div>
                <Label>Time</Label>
                <Select
                  value={bookingData.startTime}
                  onValueChange={(value) =>
                    setBookingData({ ...bookingData, startTime: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleBooking}
                disabled={
                  !bookingData.clientName ||
                  !bookingData.clientEmail ||
                  !bookingData.date ||
                  !bookingData.startTime
                }
              >
                Book Appointment
              </Button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Appointment History</h3>
              <div className="space-y-4">
                {lawyerAppointments.map((apt) => (
                  <Card key={apt.id}>
                    <CardContent className="py-4">
                      <p>Client: {apt.clientName}</p>
                      <p>Date: {apt.date}</p>
                      <p>Time: {apt.startTime}</p>
                      <p>Status: {apt.status}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {showToast && (
        <Toast
          open={showToast}
          onOpenChange={setShowToast}
          title={toastMessage}
        />
      )}
    </div>
  );
};

export default LawyerDetail;
