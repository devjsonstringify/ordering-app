import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//import local file
import style from './index.module.scss';
import Total from './Total.js';
import Button from '../../Button';
import { cart } from '../../../Ducks/Features/CartSlice.js';

export default function Checkout() {
	const firebase = useFirebase();
	const [wasSent, updateSentState] = useState('idle');
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	const calculateTotal = productsOnCart.reduce(function (prev, cur) {
		return prev + cur.total;
	}, 0);

	const toFixed = (number) => {
		if (number != undefined) return parseInt(number.toFixed(2));
	};

	const tax = 0.025;
	let subTotal = calculateTotal;
	const calculateTax = subTotal * tax;
	const grandTotal = calculateTax + subTotal;

	const addCheckout = () => {
		updateSentState('proccessing');
		const proceedToCheckout = {
			orders: [...productsOnCart],
			subtotal: toFixed(calculateTotal),
			tax: toFixed(calculateTotal * tax),
			total: toFixed(calculateTotal * tax + calculateTotal),
		};
		return firebase
			.push('checkout', proceedToCheckout)
			.then((data) => {
				const {
					path: { pieces_ },
				} = data;
				const findId = Object.values(pieces_);
				const transactionId = findId[1];
				console.log(transactionId);
				setTimeout(function () {
					updateSentState('success');
				}, 1500);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className={`mt-5 h-25 p-4 ${style.checkout}`}>
			<div className='cart-taxes '>
				<h3 className='text-body'>Order Summary</h3>
				<table className='table table-borderless'>
					<tbody>
						<tr>
							<td>Sub Total</td>
							<td className='text-body'>${subTotal.toFixed(2)}</td>
						</tr>
						<tr>
							<td>Tax rate (2.5%)</td>
							<td className='text-body'>${calculateTax.toFixed(2)}</td>
						</tr>
						<tr className='border-top'>
							<td className='h4 text-body font-weight-bold'>Total</td>
							<td className='h4 text-body font-weight-bold'>
								${grandTotal.toFixed(2)}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={`${style.cartTotal}`}>
				<Button
					style='w-100'
					handleClick={() => addCheckout()}
					disabled={wasSent == 'success' ? true : false}>
					<h4 className='text-uppercase'>
						{wasSent === 'success' ? (
							<span>Order Confirmed</span>
						) : wasSent == 'proccessing' ? (
							<span>
								Order proccessing
								<img src={require(`../../../Assets/images/loading.gif`)} />
							</span>
						) : (
							<span>
								Proceed to checkout
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-arrow-right'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
									/>
								</svg>
							</span>
						)}
					</h4>
				</Button>
			</div>
		</div>
	);
}
