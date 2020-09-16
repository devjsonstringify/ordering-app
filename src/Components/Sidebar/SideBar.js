import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import local files
import Cart from './../Cart';

export default function SideBar() {
	//local state
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='container-fluid'>
			<Cart />
		</div>
	);
}
