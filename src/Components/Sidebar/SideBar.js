import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import style from './index.module.scss';
import FloatCart from '../FloatCart';
import Checkout from '../FloatCart/Checkout';
import CartHeader from '../FloatCart/CartHeader';

// state management
import { cart } from '../../Ducks/Features/CartSlice.js';

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);
	const productsOnCart = useSelector((state) => cart.selectAll(state));

	return (
		<div className={`col-3 container h-auto pt-5 ${style.sideBar}`}>
			<CartHeader {...productsOnCart} />
			{productsOnCart.length > 0 ? (
				<>
					<FloatCart />
					<Checkout />
				</>
			) : (
				'empty cart'
			)}
			{}
		</div>
	);
}
