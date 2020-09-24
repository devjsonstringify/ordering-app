import React from 'react';
import { useSelector } from 'react-redux';

//import local file
import style from './index.module.scss';
import Total from './Total.js';
import Button from '../../Button';
import { cart } from '../../../Ducks/Features/CartSlice.js';

export default function Checkout() {
	const productsOnCart = useSelector((state) => cart.selectAll(state));

	const calculateTotal = productsOnCart.reduce(function (prev, cur) {
		return prev + cur.total;
	}, 0);

	const tax = 0.025;
	let subTotal = calculateTotal;
	const calculateTax = subTotal * tax;
	const grandTotal = calculateTax + subTotal;

	return (
		<div className={`mt-5 h-25 p-4 ${style.checkout}`}>
			<div className='cart-taxes '>
				<table className='table table-borderless'>
					<tbody>
						<tr>
							<th>Desciption</th>
							<th>Amount</th>
						</tr>
						<tr>
							<th>Sub Total</th>
							<th>${subTotal.toFixed(2)}</th>
						</tr>
						<tr>
							<th>Tax rate</th>
							<td>$2.5%</td>
						</tr>
						<tr>
							<th>Total Tax</th>
							<td>${calculateTax.toFixed(2)}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={`${style.cartTotal}`}>
				<Button style='w-100' handleClick={() => console.log('checkout...')}>
					<h5>
						Charge
						<span className='mx-3'>${grandTotal.toFixed(2)}</span>
					</h5>
				</Button>
			</div>
		</div>
	);
}
