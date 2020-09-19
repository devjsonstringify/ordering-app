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

export default function Layout({ children }) {
	// Toggle sidebar cart
	// const floatCart = useSelector((state) => isOpen(state));
	const isOpen = useSelector((state) => state.cart.isOpen);
	const products = useSelector((state) => cart.selectAll(state));
	const dispatch = useDispatch();

	return (
		<div className='container-fluid p-0'>
			<div className={`d-flex align-items-stretch ${style.layout}`}>
				<div className={` ${style.nav}`}>
					<Navigation />
				</div>
				<div className={`${style.main} container`}>
					<Main>{children}</Main>
				</div>
			</div>
			{/* <FloatCart /> */}
		</div>
	);
}

Layout.propsTypes = {
	children: PropTypes.element,
};
