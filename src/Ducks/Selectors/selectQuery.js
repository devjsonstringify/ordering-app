import { createSelector } from '@reduxjs/toolkit';
// import local file
import { selectSortPrice } from './selectSortPrice.js';

const selectProduct = (state) => state.searchQuery.query;

export const selectQuery = createSelector(
	selectSortPrice,
	selectProduct,
	(products, selectProduct) => {
		let query = selectProduct.trim().toLowerCase();
		if (query.length > 0) {
			return [...products].filter((product) => {
				return product.name.toLowerCase().match(query);
			});
		}
		return products;
	}
);
