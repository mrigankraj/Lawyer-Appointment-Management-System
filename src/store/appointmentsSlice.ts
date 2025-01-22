import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appointment } from '../types';
import { mockAppointments } from '../data/mockData';

interface AppointmentsState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentsState = {
  appointments: mockAppointments,
  loading: false,
  error: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    updateAppointment: (state, action: PayloadAction<Appointment>) => {
      const index = state.appointments.findIndex(
        (apt) => apt.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addAppointment, updateAppointment, setLoading, setError } =
  appointmentsSlice.actions;
export default appointmentsSlice.reducer;
