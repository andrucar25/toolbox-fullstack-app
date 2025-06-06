import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../redux/files/filesSlice';

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
});
