import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  isLoggedIn: boolean;
  token: string;
}

const initialState: InitialState = {
  isLoggedIn: true,
  token: '',
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setIsLoggedIn: (
      state: InitialState,
      action: {payload: {loggedIn: boolean}},
    ) => {
      state.isLoggedIn = action.payload.loggedIn;
    },
  },
});

export const {setIsLoggedIn} = authSlice.actions;

export const selectIsLoggedIn = (state: {userAuth: InitialState}) =>
  state.userAuth.isLoggedIn;

export default authSlice.reducer;
