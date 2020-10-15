// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const CartSlice = createSlice({
	name: 'cart',
	initialState: cartAdapter.getInitialState({
		isEdit: false,
	}),
	reducers: {
		addToCart: cartAdapter.addOne,
		updateCart: cartAdapter.updateOne,
		deleteCart: (state, action) => {
			cartAdapter.removeOne(state, action.payload);
		},
		cartIsEdit: (state, action) => {
			state.isEdit = !state.isEdit;
		},
		deleteAllCart: cartAdapter.removeAll,
	},
});

export const cartSelector = (state) => state.isOpen;
export const {
	addToCart,
	updateCart,
	deleteCart,
	cartIsOpen,
	cartIsEdit,
	deleteAllCart,
} = CartSlice.actions;
export default CartSlice.reducer;

export const cart = cartAdapter.getSelectors((state) => state.cart);
