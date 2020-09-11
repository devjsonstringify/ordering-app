import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import Cart from './../Cart';
import { addToCart } from '../../Ducks/Features/CartSlice.js';
import { cartSelector } from '../../Ducks/Features/CartSlice.js';

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);
	// const products = useSelector(cartSelector);

	// //state management
	// const dispatch = useDispatch();

	// // const addToCart

	// // useEffect(() => {
	// // }, []);

	return (
		<div className='container-fluid'>
			<Cart />
		</div>
	);
}
