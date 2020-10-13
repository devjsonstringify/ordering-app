import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import loca file
import Header from '../../Header';
import Button from '../../Button';

// state management
import { cart } from '../../../Ducks/Features/CartSlice.js';

export default function CartHeader() {
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	const dispatch = useDispatch();
	return (
		<Header regular='Order' strong='Menu' classes='mb-4 pl-4 border-bottom' />
	);
}
