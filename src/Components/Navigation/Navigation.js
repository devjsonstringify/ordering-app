// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

//import local files
import style from './index.module.scss';
import Logo from './../../Assets/images/logo.jpg';
import Shop from './../../Assets/images/shop.png';
import Dashboard from './../../Assets/images/dashboard.jpg';
import Bills from './../../Assets/images/bills.jpg';
import MenuItem from './MenuItem.js';

// state management
import { cartIsOpen, cartSelector } from '../../Ducks/Features/CartSlice.js';

export default function Navigation() {
	const [menus] = useState([
		{ item: 'shop', href: '/' },
		{ item: 'bill', href: '/bills' },
	]);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.isOpen);
	const [isOpen, setOpen] = useState(null);

	useEffect(() => {
		setOpen(cart);
	}, [cart]);

	return (
		<div className={`col pt-5 ${style.navigation}`}>
			<nav className='navbar navbar-light p-0'>
				<Link className='navbar-brand m-auto' to='/'>
					<img className='img-fluid' src={Logo} alt='logo' />
				</Link>
			</nav>
			<nav className='w-100 menu-items d-flex flex-column align-items-center h-100  text-center'>
				{menus.map((menu) => (
					<MenuItem key={menu.item} {...menu} />
				))}
			</nav>
		</div>
	);
}
