import { createSelector } from '@reduxjs/toolkit';
// import local file
import selectSortPrice from './selectSortPrice';

const selectProduct = (state) => state.searchQuery.query;

// eslint-disable-next-line no-shadow
const selectQuery = createSelector(selectSortPrice, selectProduct, (products, selectProduct) => {
  const query = selectProduct.trim().toLowerCase();
  if (query.length > 0) {
    return [...products].filter((product) => {
      return product.name.toLowerCase().match(query);
    });
  }
  return products;
});

export default selectQuery;
