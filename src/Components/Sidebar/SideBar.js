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
import Thumb from '../Thumb';

export default function SideBar() {
	//local state
	const isOpen = useSelector((state) => state.sideBar.isOpen);
	const productsOnCart = useSelector((state) => cart.selectAll(state));

	let classes = ['float_cart'];
	if (isOpen) {
		classes.push('float_cart--open');
	}

	return (
		<div className={classes.join(' ')}>
			{isOpen && <div className='float_cart--close-btn'>X</div>}
			{!isOpen && (
				<span className='bag bag--float-cart-closed'>
					<span className='bag__quantity'>{productsOnCart.length}</span>
				</span>
			)}
			{isOpen && <FloatCart />}
		</div>
	);
}
