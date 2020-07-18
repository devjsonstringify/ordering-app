// import library
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import ProductList from './ProductList/';
import Spinner from '../../Components/Spinner';
import Layout from '../../Components/Layout/Layout';
import ShelfHeader from './ShellHeader';
import Filter from './Filter';

// state management files
import {
	fetchProducts,
	productsSelector,
} from '../../Ducks/Slices/ProductsSlice.js';
import { sortSelector } from '../../Ducks/Slices/SortSlice.js';
// import { filterSelector } from '../../Ducks/Slices/FilterSlice.js';

function Shelf() {
	// variables declaration
	const { products, loading, hasErrors } = useSelector(productsSelector);
	const sortProducts = useSelector(sortSelector);
	const filterProducts = useSelector((state) => state.filter.items);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts(filterProducts, sortProducts));
	}, [dispatch, filterProducts, sortProducts]);

	return (
		<Layout>
			{loading && <Spinner />}
			{hasErrors && <p>Something is wrong...</p>}
			<div className='shelf-container py-5'>
				<Filter />
				<ShelfHeader productsLength={products.length} />
				<ProductList products={products} />
			</div>
		</Layout>
	);
}

export default {
	routeProps: {
		path: '/',
		exact: true,
		component: Shelf,
	},
	name: 'Shelf',
};

Shelf.propTypes = {
	loading: PropTypes.string,
	hasErrors: PropTypes.bool,
	products: PropTypes.shape({
		name: PropTypes.string.isRequired,
		descripition: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		category: PropTypes.string.isRequired,
		sku: PropTypes.string.isRequired,
	}),
	dispatch: PropTypes.func,
	sortProducts: PropTypes.string,
};
