import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

//import local files
import style from './index.module.scss';
import Logo from './../../Assets/images/logo.jpg';
import Shop from './../../Assets/images/shop.png';
import Dashboard from './../../Assets/images/dashboard.jpg';
import Bills from './../../Assets/images/bills.jpg';

import { toggleSideBar } from '../../Reducer/Slices/SideBar.js';

export default function Navigation() {
	const dispatch = useDispatch();
	return (
		<>
			<nav className='navbar navbar-light bg-transparent h-25'>
				<Link className='navbar-brand m-0' to='/'>
					<img className='img-fluid' src={Logo} alt='logo' />
				</Link>
			</nav>
			<div className='p-3'>
				<ul className='nav d-flex flex-column align-items-center'>
					<li className='nav-item my-5'>
						<NavLink to='/dashboard' activeClassName={style.current}>
							<img src={Shop} alt='shop' />
							<p>Home</p>
						</NavLink>
					</li>
					<li className='nav-item my-5'>
						<NavLink to='/setting' activeClassName={style.current}>
							<img src={Dashboard} alt='Dashboard' />
							<p>Dashboard</p>
						</NavLink>
					</li>
					<li className='nav-item my-5'>
						{/* <NavLink to='/bills' activeClassName={style.current}>
              <img src={Bills} alt='bills' />
              <p>Bills</p>
            </NavLink> */}
						<button
							type='button'
							className='btn btn-light bg-transparent border-0'
							onClick={() => {
								dispatch(toggleSideBar());
							}}>
							<img src={Bills} alt='Cart' />
							<p>Cart</p>
						</button>
					</li>
				</ul>
			</div>
		</>
	);
}
