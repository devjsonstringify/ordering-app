import { createSelector } from '@reduxjs/toolkit';

// import local file
import { VisibilityFilters } from '../Features/FilterSlice.js';
const selectProducts = (state) => state.products.products;
const selectFilter = (state) => state.filter;

export const selectFilterProducts = createSelector(
	[selectProducts, selectFilter],
	(products, filter) => {
		switch (filter) {
			case VisibilityFilters.SHOW_ALL:
				return products;
			case VisibilityFilters.SHOW_BURGER:
				return products.filter((product) => product.category === 'burger');
			case VisibilityFilters.SHOW_PIZZA:
				return products.filter((product) => product.category == 'pizza');
			case VisibilityFilters.SHOW_SNACKS:
				return products.filter((product) => product.category == 'snacks');
			case VisibilityFilters.SHOW_SOFTDRINKS:
				return products.filter((product) => product.category == 'softdrinks');
			case VisibilityFilters.SHOW_COFFEE:
				return products.filter((product) => product.category == 'coffee');
			case VisibilityFilters.SHOW_ICECREAM:
				return products.filter((product) => product.category == 'ice-cream');
			default:
				return products;
		}
	}
);
