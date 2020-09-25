import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import FloatCart from '../FloatCart';
import Checkout from '../FloatCart/Checkout';
import CartHeader from '../FloatCart/CartHeader';

import './style.scss';

// state management
import { cart } from '../../Ducks/Features/CartSlice.js';
import EmptyCart from '../FloatCart/EmptyCart';

export default function SideBar() {
	//local state
	const isOpen = useSelector((state) => state.cart.isOpen);
	const productsOnCart = useSelector((state) => cart.selectAll(state));

	let classes = ['sidebar'];
	if (isOpen) {
		classes.push('sidebar__open');
	}

	return (
		<div className={classes.join(' ')}>
			{productsOnCart.length > 0 ? (
				<>
					<CartHeader {...productsOnCart} />
					<FloatCart />
					<Checkout />
				</>
			) : (
				<EmptyCart />
			)}
		</div>
	);
}
