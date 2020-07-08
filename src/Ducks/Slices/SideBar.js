import { createSlice, configureStore } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { show: false },
  reducers: {
    toggleSideBar: (state, action) => {
      state.show = !state.show;
    },
  },
});

const store = configureStore({
  reducer: sidebarSlice.reducer
})
export const { toggleSideBar } = sidebarSlice.actions;
export const showSelector = (state) => state.show;
export default sidebarSlice.reducer;


