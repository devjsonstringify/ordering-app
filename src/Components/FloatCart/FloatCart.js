import React from 'react';

// import local file
import style from './index.module.scss';
import Cart from '../Cart';
import Checkout from '../Checkout/Checkout';

export default function FloatCart() {
	return (
		<div className={style.floatCart}>
			<Cart />
			<Checkout />
		</div>
	);
}
