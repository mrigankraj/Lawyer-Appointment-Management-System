import { configureStore } from '@reduxjs/toolkit';
import lawyersReducer from './lawyersSlice';
import appointmentsReducer from './appointmentsSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    lawyers: lawyersReducer,
    appointments: appointmentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
