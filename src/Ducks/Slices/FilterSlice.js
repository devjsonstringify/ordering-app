// import react library
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: '',
};

const FilterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		updateFilter: (state, action) => {
			state.items = action.payload;
		},
	},
});

export const { updateFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
