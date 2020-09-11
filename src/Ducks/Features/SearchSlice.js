// import react library
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	query: '',
};

const querySlice = createSlice({
	name: 'searchQuery',
	initialState,
	reducers: {
		getProductQuery: (state, action) => {
			state.query = action.payload;
		},
	},
});
export const { getProductQuery } = querySlice.actions;
export default querySlice.reducer;
