import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import files
import style from './index.module.scss';
import {
	cart,
	updateCart,
	deleteCart,
} from '../../../../Ducks/Features/CartSlice.js';
import useHover from '../../../../Utilities/useHover.js';
import Card from '../../../Card';
import Quantity from './../Quantiy';
import QuantityTotal from './QuantityTotal.js';

export default function Product({ product }) {
	const { id, price, sku, quantity } = product;
	const cartId = useSelector((state) => cart.selectById(state, id));
	const isEdit = useSelector((state) => state.cart.isEdit);
	const dispatch = useDispatch();
	let minimumProduct = cartId.quantity < 2 ? true : false;
	let calculateAmount = quantity * price;
	const [hoverRef, isHovered] = useHover();

	const handleDecrementQuantity = (product, cartId) => {
		const { id, price } = product;
		dispatch(
			updateCart({
				id,
				changes: {
					quantity: cartId.quantity - 1,
					total: cartId.quantity * price - price,
				},
			})
		);
	};

	const handleIncrementQuantity = (product, cartId) => {
		const { id, price } = product;
		dispatch(
			updateCart({
				id,
				changes: {
					quantity: cartId.quantity + 1,
					total: cartId.quantity * price + price,
				},
			})
		);
	};

	return (
		<div className={`container cart-item pb-1 ${style.product}`}>
			{isEdit ? (
				<button
					type='button'
					className='btn btn-link p-0'
					onClick={() => dispatch(deleteCart(id))}>
					<svg
						width='1em'
						height='1em'
						viewBox='0 0 16 16'
						className='bi bi-trash'
						fill='#ff2351'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
						<path
							fillRule='evenodd'
							d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
						/>
					</svg>
				</button>
			) : null}
			<div
				className={`${
					isEdit
						? 'cart-item-details container d-flex align-items-baseline mx-2'
						: 'cart-item-details container d-flex align-items-baseline'
				}`}>
				<Card
					rowPos='flex-fill d-flex justify-content-evenly'
					shape='square'
					size='xsmall'
					thumbnail={require(`../../../../Assets/Products/${sku}.png`)}
					{...product}
				/>
				<Quantity
					handleDecrementQuantity={() =>
						handleDecrementQuantity(product, cartId)
					}
					handleIncrementQuantity={() =>
						handleIncrementQuantity(product, cartId)
					}
					minimumProduct={minimumProduct}
					quantity={quantity}
					classes={`${
						isEdit
							? 'd-flex justify-content-around align-items-center mx-4'
							: 'flex-fill'
					}`}
				/>
				<QuantityTotal classes='flex-fill' amount={calculateAmount} />
			</div>
		</div>
	);
}
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		price: PropTypes.number,
		sku: PropTypes.string,
		quantity: PropTypes.number,
	}),
};
