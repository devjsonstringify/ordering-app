// import react library
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const response = await fetch(`http://localhost:3000/api/v1/foods`, {
			headers: {
				'content-type': 'application/json',
			},
		});

		return await response.json();
	}
);
export const initialState = {
	loading: 'idle',
	hasErrors: null,
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.pending]: (state, action) => {
			state.loading = 'loading';
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.loading = 'succeded';
			state.products = action.payload;
		},
		[fetchProducts.rejected]: (state, action) => {
			state.loading = 'failed';
			state.hasErrors = action.error.message;
		},
	},
});

export default productsSlice.reducer;
export const productsSelector = (state) => state.products;
export const selectorProducts = (state) => state.products.products;
