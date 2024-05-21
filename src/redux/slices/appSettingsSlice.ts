import {createSlice} from '@reduxjs/toolkit';
import {TThemes} from '../../constants/themes';

interface InitialState {
  theme: TThemes;
}

const initialState: InitialState = {
  theme: 'light',
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    setTheme: (state: InitialState, action: {payload: {theme: TThemes}}) => {
      state.theme = action.payload.theme;
    },
  },
});

export const {setTheme} = appSettingsSlice.actions;

export const selectTheme = (state: {appSettings: InitialState}) =>
  state.appSettings.theme;

export default appSettingsSlice.reducer;
