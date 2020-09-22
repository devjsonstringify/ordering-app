import React from 'react';
import { useSelector } from 'react-redux';

// import local file
import { cart } from '../../../Ducks/Features/CartSlice.js';
export default function Total() {
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	const calculateTotal = productsOnCart.reduce(function (prev, cur) {
		return prev + cur.total;
	}, 0);
	return <span className='mx-4'>{`$${calculateTotal.toFixed(2)}`}</span>;
}
