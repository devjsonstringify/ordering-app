import { createSlice, configureStore } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState: { isOpen: false },
	reducers: {
		isToggle: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

const store = configureStore({
	reducer: sidebarSlice.reducer,
});
export const { isToggle } = sidebarSlice.actions;
export const showSelector = (state) => state.show;
export default sidebarSlice.reducer;
