import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	hasErrors: false,
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state) => {
			state.loading = true;
		},
		getProductsSuccess: (state, { payload }) => {
			state.products = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getProductsFailure: (state) => {
			state.loading = false;
			state.hasErrors = true;
		},
	},
});

export const {
	getProducts,
	getProductsSuccess,
	getProductsFailure,
} = productsSlice.actions;

export const productsSelector = (state) => state.products;
export default productsSlice.reducer;

export function fetchProducts() {
	return async (dispatch) => {
		dispatch(getProducts());
		try {
			const response = await fetch(`http://localhost:3000/api/v1/foods`);
			const data = await response.json();
			dispatch(getProductsSuccess(data));
		} catch (error) {
			dispatch(getProductsFailure());
		}
	};
}
