import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { show: false },
  reducers: {
    showSidebar: (state, action) => {
      state.show = !state.show;
    },
  },
});

export const { showSidebar } = sidebarSlice.actions;
export const showSelector = (state) => state.show;
export default sidebarSlice.reducer;
