import { createSelector } from '@reduxjs/toolkit';

// import local file
import { selectFilterProducts } from './selectFilterProducts.js';
const selectSort = (state) => state.sort.type;

export const selectSortPrice = createSelector(
	selectFilterProducts,
	selectSort,
	(products, sort) => {
		switch (sort) {
			case 'LOWEST_PRICE':
				return [...products].sort((a, b) => {
					return parseFloat(a.price) - parseFloat(b.price);
				});
			case 'HIGHEST_PRICE':
				return [...products].sort((a, b) => {
					return parseFloat(b.price) - parseFloat(a.price);
				});
			default:
				return products;
		}
	}
);
