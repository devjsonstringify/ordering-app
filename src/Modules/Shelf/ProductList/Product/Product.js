// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';

// import local files
import style from './index.module.scss';
import util from '../../../../Utilities/util.js';

//state management
import {
	addToCart,
	updateCart,
	cart,
	cartIsOpen,
} from '../../../../Ducks/Features/CartSlice.js';

export default function Product({ products }) {
	const { id } = products;
	const isOpen = useSelector((state) => state.cart.isOpen);
	const cartProductsList = useSelector((state) => cart.selectAll(state));
	const getProductOnCart = useSelector((state) => cart.selectById(state, id));

	const dispatch = useDispatch();

	const addItemToCart = () => {
		let isQty = isUndefined(getProductOnCart);
		let quantity = 1;
		let newItemProduct = {
			...products,
			quantity,
			total: products.price,
		};
		dispatch(cartIsOpen(!isOpen));

		// check if product already exist in the cart.
		let idAlreadyExists = cartProductsList.find((product) => product.id == id);
		// otherwise add new product in the cart
		if (!idAlreadyExists) dispatch(addToCart(newItemProduct));
		// if exist and not undefined, update quantity
		if (!isQty) {
			dispatch(
				updateCart({
					id: newItemProduct.id,
					changes: {
						quantity: getProductOnCart.quantity + 1,
						total: getProductOnCart.quantity * products.price + products.price,
					},
				})
			);
		}
	};

	return (
		<div
			className={`col rounded ${style.col}`}
			key={id}
			data-sku={products.sku}>
			<div className='card p-4'>
				<img
					className={`text-center ${style.img}`}
					src={require(`../../../../Assets/Products/${products.sku}.png`)}
					alt='name'></img>
				<div className='card-body text-primary text-center'>
					<h5 className='card-title text-dark'>{products.name}</h5>
					<p className='card-text'>${products.price}</p>
				</div>
				<button
					type='button'
					className='btn btn-outline-secondary'
					onClick={() => {
						addItemToCart(products);
					}}>
					Add to cart
				</button>
			</div>
		</div>
	);
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		category: PropTypes.string,
		description: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		published: PropTypes.number,
		quantity: PropTypes.number,
		sku: PropTypes.string,
	}),
};
