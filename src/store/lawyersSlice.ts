import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lawyer } from '../types';
import { mockLawyers } from '../data/mockData';

interface LawyersState {
  lawyers: Lawyer[];
  selectedLawyer: Lawyer | null;
  loading: boolean;
  error: string | null;
}

const initialState: LawyersState = {
  lawyers: mockLawyers,
  selectedLawyer: null,
  loading: false,
  error: null,
};

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {
    setSelectedLawyer: (state, action: PayloadAction<Lawyer | null>) => {
      state.selectedLawyer = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSelectedLawyer, setLoading, setError } = lawyersSlice.actions;
export default lawyersSlice.reducer;
