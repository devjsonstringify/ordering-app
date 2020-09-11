import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import files
import {
	cartList,
	updateCart,
	deleteCart,
} from '../../../Ducks/Features/CartSlice.js';
import useHover from '../../../Utilities/useHover.js';

export default function Product({ product }) {
	const { id, name, price, sku, quantity } = product;
	const getCartProducts = useSelector((state) =>
		cartList.selectById(state, id)
	);
	let getProductById = getCartProducts.quantity;
	const dispatch = useDispatch();
	let isZero = getProductById < 2 ? true : false;
	const [hoverRef, isHovered] = useHover();

	return (
		<div className='container'>
			<button
				type='button'
				className='btn btn-secondary'
				onClick={() => dispatch(deleteCart(id))}>
				x
			</button>
			<div className='row'>
				<div className='col-4'>
					<img
						src={require(`../../../Assets/Products/${sku}.png`)}
						alt='name'
					/>
				</div>
				<div className='col-4'>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item text-capitalize'>{name}</li>
						<li className='list-group-item text-capitalize'>{price}</li>
					</ul>
				</div>
				<div className='col-4'>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item text-capitalize border border-white'>
							{`X${quantity}`}
							<input
								type='number'
								id='quantity'
								name='quantity'
								min={quantity}
								value={quantity}
								max='100'
								onChange={() =>
									dispatch(
										updateCart({
											id,
											changes: { quantity: getProductById + 1 },
										})
									)
								}></input>
						</li>
						<li className='list-group-item text-capitalize border border-white'>
							<p>
								<strong>$</strong>
								{quantity * price}
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
