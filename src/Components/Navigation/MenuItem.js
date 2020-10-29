import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import file
import './style.scss';
import Thumb from '../../Components/Thumb';

export default function MenuItem({ href, item }) {
	return (
		<NavLink
			to={href}
			className='text-capitalize text-decoration-none px-2 py-3 mr-3'
			exact={href == '/' ? true : false}>
			{item}
		</NavLink>
	);
}
