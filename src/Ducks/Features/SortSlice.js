// import react library
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	type: '',
};

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		updateSort: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { updateSort } = sortSlice.actions;
export const sortSelector = (state) => state.sort.type;
export default sortSlice.reducer;
