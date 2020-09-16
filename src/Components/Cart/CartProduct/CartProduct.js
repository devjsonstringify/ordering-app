import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import files
import {
	cart,
	updateCart,
	deleteCart,
} from '../../../Ducks/Features/CartSlice.js';
import useHover from '../../../Utilities/useHover.js';
import Thumb from '../../Thumb/Thumb.js';

export default function Product({ product }) {
	const { id, name, price, sku, quantity } = product;
	const cartId = useSelector((state) => cart.selectById(state, id));
	const dispatch = useDispatch();
	let minimumProduct = cartId.quantity < 2 ? true : false;
	let calculateAmount = quantity * price;
	const [hoverRef, isHovered] = useHover();

	return (
		<div className='container align-items-center d-flex'>
			<button
				type='button'
				className='btn btn-link p-0'
				onClick={() => dispatch(deleteCart(id))}>
				<span className='badge bg-dark'>x</span>
			</button>
			<div className='row align-items-center '>
				<Thumb
					classes='col-2'
					src={require(`../../../Assets/Products/${sku}.png`)}
					alt={name}
					title={name}
				/>
				<div className='col-2'>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item text-capitalize'>{name}</li>
						<li className='list-group-item text-capitalize'>{price}</li>
					</ul>
				</div>
				<div className='col-7'>
					<ul className='list-group list-group-flush flex-row'>
						<li className='list-group-item text-capitalize border border-white flex-row'>
							<div className='d-flex'>
								<button
									disabled={minimumProduct}
									type='button'
									onClick={() =>
										dispatch(
											updateCart({
												id,
												changes: {
													quantity: cartId.quantity - 1,
													total:
														cartId.quantity * product.price - product.price,
												},
											})
										)
									}>
									<span className='text-secondary'>-</span>
								</button>
								<span className='badge rounded-pill bg-light text-dark'>
									x{quantity}
								</span>
								<button
									type='button'
									onClick={() =>
										dispatch(
											updateCart({
												id,
												changes: {
													quantity: cartId.quantity + 1,
													total:
														cartId.quantity * product.price + product.price,
												},
											})
										)
									}>
									<span className='text-secondary'>+</span>
								</button>
							</div>
						</li>
						<li className='list-group-item text-capitalize border border-white'>
							<p>
								<strong>$</strong>
								{calculateAmount.toFixed(2)}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
