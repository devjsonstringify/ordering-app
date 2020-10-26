// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

//import local files
import './style.scss';
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
		<div className='col row d-flex  justify-content-sm-between  container navigation'>
			<nav className='navbar navbar-light bg-light col col-md-4 h-100'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						<h2 className='text-uppercase text-body'>Pagkaon</h2>
					</Link>
				</div>
			</nav>
			<nav className='menu-items d-flex align-items-baseline text-center col col-md-3 offset-sm-4 justify-content-sm-end justify-content-center mr-sm-5 mr-0 h-100'>
				{menus.map((menu) => (
					<MenuItem key={menu.item} {...menu} />
				))}
			</nav>
		</div>
	);
}
