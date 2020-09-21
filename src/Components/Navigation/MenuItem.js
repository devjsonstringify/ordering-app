import React from 'react';
import { NavLink } from 'react-router-dom';

// import file
export default function MenuItem({ thumbnail, link, item }) {
	return (
		<NavLink to={link} className='text-break text-decoration-none'>
			<img src={thumbnail} alt={item} />
			<p>{item}</p>
		</NavLink>
	);
}
