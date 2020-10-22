import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

//import local file
import style from './index.module.scss';
import Total from './Total.js';
import Button from '../../Button';

// state management
import { cart, deleteAllCart } from '../../../Ducks/Features/CartSlice.js';
import { isToggle } from '../../../Ducks/Features/SideBar.js';
import {
	checkOutIsSubmit,
	getTransactionId,
	setBillNotify,
} from '../../../Ducks/Features/CheckOut.js';

export default function Checkout() {
	const firebase = useFirebase();
	const [checkoutDetails, setCheckoutDetails] = useState({
		orders: [],
		subTotal: null,
		taxRate: 0.025,
		tax: null,
		total: null,
		startedAt: firebase.database.ServerValue.TIMESTAMP,
	});
	const dispatch = useDispatch();
	const history = useHistory();
	const [wasSent, updateSentState] = useState('idle');
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	const calculateTotal = productsOnCart.reduce(function (prev, cur) {
		return prev + cur.total;
	}, 0);

	useEffect(() => {
		dispatch(setBillNotify(false));
		if (productsOnCart.length > 0) {
			setCheckoutDetails({
				...checkoutDetails,
				orders: [
					...productsOnCart.map(({ id, name, price, quantity, ...rest }) => {
						return {
							id,
							name,
							price,
							quantity,
						};
					}),
				],
				subTotal: calculateTotal.toFixed(2),
				tax: (calculateTotal * checkoutDetails.taxRate).toFixed(2),
				total: (
					calculateTotal * checkoutDetails.taxRate +
					calculateTotal
				).toFixed(2),
			});
		}
	}, [productsOnCart]);

	useEffect(() => {
		if (wasSent === 'success') {
			history.push('/bills');
		}
	}, [wasSent]);

	const addCheckout = () => {
		updateSentState('proccessing');
		return firebase
			.push('checkout', checkoutDetails)
			.then((data) => {
				const {
					path: { pieces_ },
				} = data;
				const findId = Object.values(pieces_);
				const transactionId = findId[1]; // get transaction id

				setTimeout(function () {
					updateSentState('success');
					dispatch(getTransactionId(transactionId));
					dispatch(deleteAllCart());
					dispatch(checkOutIsSubmit(false));
					dispatch(isToggle(false));
				}, 1500);
			})
			.catch((error) => console.log(error));
	};

	const { subTotal, tax, total } = checkoutDetails;

	return (
		<div className={`mt-5 h-25 p-4 ${style.checkout}`}>
			<div className='cart-taxes '>
				<h3 className='text-body'>Order Summary</h3>
				<table className='table table-borderless'>
					<tbody>
						<tr>
							<td>Sub Total</td>
							<td className='text-body'>${subTotal}</td>
						</tr>
						<tr>
							<td>Tax rate (2.5%)</td>
							<td className='text-body'>${tax}</td>
						</tr>
						<tr className='border-top'>
							<td className='h4 text-body font-weight-bold'>Total</td>
							<td className='h4 text-body font-weight-bold'>${total}</td>
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
								proccessing...
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
