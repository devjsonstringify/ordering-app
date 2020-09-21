import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FloatCart from '../FloatCart';

//import local files

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='side bar col-3 border'>
			<FloatCart />
		</div>
	);
}
