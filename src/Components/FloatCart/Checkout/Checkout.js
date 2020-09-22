import React from 'react';

//import local file
import style from './index.module.scss';
import Total from './Total.js';

export default function Checkout() {
	return (
		<div className={`mt-5 h-25 p-4 ${style.checkout}`}>
			<div className='cart-taxes'>
				<table className='table table-borderless'>
					<tbody>
						<tr>
							<td>Sub Total</td>
							<td>$22.00</td>
						</tr>
						<tr>
							<th>PB (5%)</th>
							<td>$2.12</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={`${style.cartTotal}`}>
				<h5>
					Charge
					<span>
						<Total />
					</span>
				</h5>
			</div>
		</div>
	);
}
