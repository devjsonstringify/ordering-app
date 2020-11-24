/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// import react library
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  providerData: [],
  isAuthenticated: {
    isAuth: false,
    isError: false,
    message: '',
  },
};

const userProfile = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.providerData = action.payload;
    },
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { getCurrentUser, setAuthentication } = userProfile.actions;
export default userProfile.reducer;
