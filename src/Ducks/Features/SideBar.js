/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { isOpen: false },
  reducers: {
    isToggle: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { isToggle } = sidebarSlice.actions;
export const showSelector = (state) => state.show;
export default sidebarSlice.reducer;
