// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const CheckOutAdapter = createEntityAdapter();

const CheckOut = createSlice({
	name: 'checkout',
	initialState: CheckOutAdapter.getInitialState({
		isSubmit: false,
	}),
	reducers: {
		// addToCart: CheckOutAdapter.addOne,
		// updateCart: CheckOutAdapter.updateOne,
		// deleteCart: (state, action) => {
		// 	CheckOutAdapter.removeOne(state, action.payload);
		// },
		checkOutIsSubmit: (state, action) => {
			state.isSubmit = action.payload;
		},
	},
});

export const { checkOutIsSubmit } = CheckOut.actions;
export default CheckOut.reducer;
