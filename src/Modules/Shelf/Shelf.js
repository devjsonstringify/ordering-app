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
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function Shelf() {
	useFirebaseConnect([{ path: 'products' }]);
	const products = useSelector((state) => selectQuery(state));
	if (!isLoaded(products)) {
		return (
			<Layout>
				<Spinner />
			</Layout>
		);
	}
	return (
		<Layout>
			<SearchProduct />
			<Filter />

			{isEmpty(products) ? (
				<div className='align-items-center d-flex justify-content-center p-5'>
					<p className='text-center'> 😪 Sorry we cannot find your item.</p>
				</div>
			) : (
				<ProductList products={products} />
			)}
		</Layout>
	);
}

export default {
	routeProps: {
		exact: true,
		path: '/',
		component: Shelf,
	},
	name: 'Shelf',
};

Shelf.propTypes = {};
