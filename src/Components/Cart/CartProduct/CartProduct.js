import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import files
import {
	cart,
	updateCart,
	deleteCart,
} from '../../../Ducks/Features/CartSlice.js';
import useHover from '../../../Utilities/useHover.js';
import Card from '../../../Components/Card';
import Quantity from './../Quantiy';
import QuantityTotal from './QuantityTotal.js';

export default function Product({ product }) {
	const { id, price, sku, quantity } = product;
	const cartId = useSelector((state) => cart.selectById(state, id));
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
		<div className='container cart-item pb-1'>
			<button
				type='button'
				className='btn btn-link p-0'
				onClick={() => dispatch(deleteCart(id))}>
				<span className='badge bg-dark'>x</span>
			</button>
			<div className='cart-item-details container d-flex align-items-baseline'>
				<Card
					rowPos='flex-fill d-flex justify-content-evenly'
					shape='square'
					size='small'
					thumbnail={require(`../../../Assets/Products/${sku}.png`)}
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
					classes='flex-fill'
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
