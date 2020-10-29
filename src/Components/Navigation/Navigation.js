// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

//import local files
import './style.scss';
import MenuItem from './MenuItem.js';
import Button from './../Button';

// state management
import { cartIsOpen, cartSelector } from '../../Ducks/Features/CartSlice.js';
import { isToggle } from '../../Ducks/Features/SideBar.js';
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
		<nav className='navbar navbar-expand-lg navbar-light bg-light p-0'>
			<div className='container-fluid position-relative'>
				<div className='app_logo'>
					<a
						className='navbar-brand text-uppercase text-body navbar-brand'
						href='/'>
						Pagkaon
					</a>
				</div>
				{/* cart button */}
				<Button
					style='cart-mobile d-block d-sm-none text-capitalize text-decoration-none mr-3'
					handleClick={() => dispatch(isToggle(true))}>
					cart
				</Button>
				<button
					className='navbar-toggler mr-sm-5 border-0 mobile-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarContent'
					aria-controls='navbarContent'
					aria-expanded='false'
					aria-label='navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarContent'>
					<ul className='menu-items d-flex justify-content-sm-end mb-2 mb-lg-0 navbar-nav w-100 flex-row justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-center'>
						{menus.map((menu) => (
							<li className='nav-item d-flex' key={menu.item}>
								<MenuItem {...menu} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
