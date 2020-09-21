import React from 'react';
import { useSelector } from 'react-redux';

// import local file
import { formatPrice } from '../../../Utilities/util.js';
import { cart } from '../../../Ducks/Features/CartSlice.js';
export default function Total() {
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	const calculateTotal = productsOnCart.reduce(function (prev, cur) {
		return prev + cur.total;
	}, 0);
	const amounts = formatPrice(calculateTotal);
	return <div>{amounts}</div>;
}
