// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const CheckOutAdapter = createEntityAdapter();

const CheckOut = createSlice({
	name: 'checkout',
	initialState: CheckOutAdapter.getInitialState({
		isSubmit: false,
		transactionId: null,
	}),
	reducers: {
		checkOutIsSubmit: (state, action) => {
			state.isSubmit = action.payload;
		},
		getTransactionId: (state, action) => {
			state.transactionId = action.payload;
		},
		deleteAllCheckOutDetails: CheckOutAdapter.removeAll,
	},
});

export const {
	checkOutIsSubmit,
	setCheckoutOrders,
	getTransactionId,
	deleteAllCheckOutDetails,
} = CheckOut.actions;
export default CheckOut.reducer;
