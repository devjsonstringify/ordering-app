// import react library
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { find } from 'lodash/find';

export const cartAdapter = createEntityAdapter();

const CartSlice = createSlice({
	name: 'cart',
	initialState: cartAdapter.getInitialState(),
	reducers: {
		addToCart: cartAdapter.addOne,
		updateCart: cartAdapter.updateOne,
		deleteCart: (state, action) => {
			cartAdapter.removeOne(state, action.payload);
		},
	},
});

export const cartSelector = (state) => state.products;
export const {
	addToCart,
	updateCart,
	deleteCart,
	showCart,
} = CartSlice.actions;
export default CartSlice.reducer;

export const cartList = cartAdapter.getSelectors((state) => state.cart);
