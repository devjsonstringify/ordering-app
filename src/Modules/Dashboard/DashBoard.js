import React, { useEffect } from 'react';
import useSWR from 'swr';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

//import local files
import Spinner from './../../Components/Spinner';
import Layout from '../../Components/Layout/Layout';
import { Cards } from '../../Components/Card/Cards';
import { Category } from '../../Components/Category/index';
import {
	fetchProducts,
	productsSelector,
} from './../../Reducer/Slices/ProductsSlice.js';

function Dashboard() {
	const dispatch = useDispatch();
	const { products, loading, hasErrors } = useSelector(productsSelector);
	// const fetcher = (url) => fetch(url).then((r) => r.json());
	// const { data, error } = useSWR('http://localhost:3000/api/v1/foods', fetcher);
	let match = useRouteMatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Layout>
			<div className='container'>
				{/* <Category />
				<Cards data={products} /> */}
				{loading && <Spinner />}
				{hasErrors && <p>Something is wrong...</p>}
				{products && <Cards data={products} />}
			</div>
		</Layout>
	);
}

export default {
	routeProps: {
		path: '/Dashboard',
		exact: true,
		component: Dashboard,
	},
	name: 'Dashboard',
};
