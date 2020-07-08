
// import library
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import ProductList from './ProductList/';
import Spinner from '../../Components/Spinner';
import Layout from '../../Components/Layout/Layout';
import ShelfHeader from './ShellHeader';

// state management files
import {
	fetchProducts,
	productsSelector,
} from '../../Ducks/Slices/ProductsSlice.js';
import { sortSelector} from '../../Ducks/Slices/SortSlice.js'

function Shelf() {

	// variables declaration
	const { products, loading, hasErrors } = useSelector(productsSelector);
	const sortProducts = useSelector(sortSelector)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts(sortProducts));
	}, [sortProducts, dispatch]);

	return (
		<Layout>
			{loading && <Spinner />}
			{hasErrors && <p>Something is wrong...</p>}
			<div className='shelf-container'>
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
