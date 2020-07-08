import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import { addToCart } from '../../Ducks/Slices/CartSlice.js';
import { cartSelector } from '../../Ducks/Slices/CartSlice.js';

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);
	const products = useSelector(cartSelector);

	//state management
	const dispatch = useDispatch();

	// const addToCart

	// useEffect(() => {
	// }, []);

	return (
		<div className='container-fluid'>
			<pre>sidebar...</pre>
		</div>
	);
}
