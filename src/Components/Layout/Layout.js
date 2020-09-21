// import react library
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//import local files
import style from './index.module.scss';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Sidebar from '../Sidebar';
import FloatCart from '../FloatCart';

// state management
import { cart } from '../../Ducks/Features/CartSlice.js';
import SideBar from '../Sidebar';

export default function Layout({ children }) {
	// Toggle sidebar cart
	// const floatCart = useSelector((state) => isOpen(state));
	const isOpen = useSelector((state) => state.cart.isOpen);
	const products = useSelector((state) => cart.selectAll(state));
	const dispatch = useDispatch();

	return (
		<div className='container-fluid h-100'>
			<div className='row h-100'>
				<Navigation />
				<Main>{children}</Main>
				<SideBar />
			</div>
		</div>
	);
}

Layout.propsTypes = {
	children: PropTypes.element,
};
