import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSettingsSlice from './slices/appSettingsSlice';

export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    appSettings: appSettingsSlice,
  },
});
