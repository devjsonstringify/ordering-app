import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import file
import './style.scss';
import Thumb from '../../Components/Thumb';

export default function MenuItem({ href, item }) {
	return (
		<NavLink
			to={href}
			className='text-break text-decoration-none mx-3 p-3'
			exact={href == '/' ? true : false}>
			<p className='m-auto'>{item}</p>
		</NavLink>
	);
}
