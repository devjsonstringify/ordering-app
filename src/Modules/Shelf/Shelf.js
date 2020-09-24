// import library
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import ProductList from './ProductList/';
import Spinner from '../../Components/Spinner';
import Layout from '../../Components/Layout/Layout';
import Filter from './Filter';
import { selectQuery } from '../../Ducks/Selectors/selectQuery.js';
import SearchProduct from './SearchProduct';

// state management files
import {
	fetchProducts,
	productsSelector,
} from '../../Ducks/Features/ProductsSlice.js';

function Shelf() {
	const { products: reduxProducts, loading, hasErrors } = useSelector(
		productsSelector
	);
	const dispatch = useDispatch();
	const products = useSelector((state) => selectQuery(state));

	useEffect(() => {
		if (loading === 'idle') {
			dispatch(fetchProducts());
		}
	}, [dispatch, loading, reduxProducts]);

	let content;
	if (loading === 'loading') {
		content = <Spinner />;
	} else if (loading === 'succeded') {
		return (content = (
			<Layout>
				<SearchProduct />
				<Filter />
				<ProductList products={products} />;
			</Layout>
		));
	} else if (loading === 'failed') {
		content = <p>{hasErrors}</p>;
	}
	return <>{content}</>;
}

export default {
	routeProps: {
		exact: true,
		path: '/',
		component: Shelf,
	},
	name: 'Shelf',
};

Shelf.propTypes = {
	loading: PropTypes.string,
	hasErrors: PropTypes.bool,
	products: PropTypes.array,
	dispatch: PropTypes.func,
};
