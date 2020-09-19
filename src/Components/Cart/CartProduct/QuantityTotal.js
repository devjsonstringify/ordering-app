import React from 'react';
import { formatPrice } from '../../../Utilities/util.js';

export default function QuantityTotal({ amount, classes }) {
	let style = ['cart-amount'];
	style.push(classes);
	return (
		<div className={style.join(' ')}>
			<p>{amount.toFixed(2)}</p>
		</div>
	);
}
