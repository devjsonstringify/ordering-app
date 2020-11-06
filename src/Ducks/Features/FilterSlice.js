// import react library
import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BURGER: 'SHOW_BURGER',
  SHOW_PIZZA: 'SHOW_PIZZA',
  SHOW_SNACKS: 'SHOW_SNACKS',
  SHOW_SOFTDRINKS: 'SHOW_SOFTDRINKS',
  SHOW_COFFEE: 'SHOW_COFFEE',
  SHOW_ICECREAM: 'SHOW_ICECREAM',
};

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    },
  },
});
export const { setVisibilityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
