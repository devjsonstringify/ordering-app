// import react library
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => ( state => initialState)
	},
});

export const cartSelector = (state) => state.products;
export const { addToCart, loadCart } = CartSlice.actions;
export default CartSlice.reducer;
