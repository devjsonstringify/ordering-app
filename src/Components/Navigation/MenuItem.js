import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import file
import style from './index.module.scss';
import Thumb from '../../Components/Thumb';

export default function MenuItem({ href, item }) {
	let demo = false;
	return (
		<NavLink
			to={href}
			className='text-break text-decoration-none d-block w-100 my-3'
			activeClassName={`${style.menuitemActive}`}
			exact={href == '/' ? true : false}>
			<div className='m-auto mb-4 mt-4'>
				<Thumb
					name={item}
					size='xsmall'
					thumbnail={require(`../../Assets/images/${item}.png`)}
				/>
				<p className='my-2'>{item}</p>
			</div>
		</NavLink>
	);
}
