// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const cartAdapter = createEntityAdapter();

const CartSlice = createSlice({
	name: 'cart',
	initialState: cartAdapter.getInitialState({
		isOpen: false,
	}),
	reducers: {
		addToCart: cartAdapter.addOne,
		updateCart: cartAdapter.updateOne,
		deleteCart: (state, action) => {
			cartAdapter.removeOne(state, action.payload);
		},
		cartIsOpen: (state, action) => {
			state.isOpen = action.payload;
		},
	},
});

export const cartSelector = (state) => state.isOpen;
export const {
	addToCart,
	updateCart,
	deleteCart,
	cartIsOpen,
} = CartSlice.actions;
export default CartSlice.reducer;

export const cart = cartAdapter.getSelectors((state) => state.cart);
