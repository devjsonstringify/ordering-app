import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import style from './index.module.scss';
import FloatCart from '../FloatCart';
import Checkout from '../FloatCart/Checkout';

// state management
import { cart } from '../../Ducks/Features/CartSlice.js';

const Header = () => {
	return (
		<div>
			<h4>header</h4>
		</div>
	);
};

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);
	const productsOnCart = useSelector((state) => cart.selectAll(state));

	return (
		<div className={`col-3 container h-auto ${style.sideBar}`}>
			<FloatCart />
			{productsOnCart.length > 0 ? (
				<>
					<Checkout />
					<Header />
				</>
			) : (
				'empty cart'
			)}
			{}
		</div>
	);
}
