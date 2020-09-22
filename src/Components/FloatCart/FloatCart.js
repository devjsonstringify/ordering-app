import React from 'react';
import { useSelector } from 'react-redux';

// import local file
import style from './index.module.scss';
import Cart from './Cart';

export default function FloatCart() {
	return (
		<div className={`my-5 ${style.floatCart}`}>
			<Cart />
		</div>
	);
}
