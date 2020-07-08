// import react library
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

const compare = {
	lowestprice: (a, b) => {
	  if (a.price < b.price) return -1;
	  if (a.price > b.price) return 1;
	  return 0;
	},
	highestprice: (a, b) => {
	  if (a.price > b.price) return -1;
	  if (a.price < b.price) return 1;
	  return 0;
	}
  };

export function fetchProducts(sortBy) {
	return async (dispatch) => {
		dispatch(getProducts());
		try {
			const response = await fetch(`http://localhost:3000/api/v1/foods`);
			const data = await response.json();


			setTimeout( () => {
				if(!!sortBy && data.length > 0){
					dispatch(getProductsSuccess(data.sort(compare[sortBy])));
					
				}
			}, 2000 )

			setTimeout( () => {
				dispatch(getProductsSuccess(data));
			}, 2000 )
			
			
			
		} catch (error) {
			dispatch(getProductsFailure());
		}
	};
}


