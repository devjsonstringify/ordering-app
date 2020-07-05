import { createSlice, configureStore } from '@reduxjs/toolkit';

const CartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addItem: (state, action) => {
			state.push(action.payload);
		},
	},
});

const store = configureStore({
	reducer: CartSlice.reducer,
});
export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
