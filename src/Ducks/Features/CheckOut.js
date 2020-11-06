
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const CheckOutAdapter = createEntityAdapter();

const CheckOut = createSlice({
  name: 'checkout',
  initialState: CheckOutAdapter.getInitialState({
    isSubmit: false,
    transactionId: '',
    notifier: false,
  }),
  reducers: {
    checkOutIsSubmit: (state, action) => {
      state.isSubmit = action.payload;
    },
    getTransactionId: (state, action) => {
      state.transactionId = action.payload;
    },
    setBillNotify: (state, action) => {
      state.notifier = action.payload;
    },
    deleteAllCheckOutDetails: CheckOutAdapter.removeAll,
  },
});

export const {
  checkOutIsSubmit,
  setCheckoutOrders,
  getTransactionId,
  deleteAllCheckOutDetails,
  setBillNotify,
} = CheckOut.actions;
export default CheckOut.reducer;
