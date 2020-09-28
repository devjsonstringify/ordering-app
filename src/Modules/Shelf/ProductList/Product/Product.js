// import react library
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';
import { toast } from 'react-toastify';

// import local files
import style from './index.module.scss';
import Card from '../../../../Components/Card';
import Button from '../../../../Components/Button';
import useHover from './../../../../Utilities/useHover.js';

//state management
import {
	addToCart,
	updateCart,
	cart,
	cartIsOpen,
} from '../../../../Ducks/Features/CartSlice.js';
import { isToggle } from '../../../../Ducks/Features/SideBar.js';
import Thumb from '../../../../Components/Thumb';

export default function Product({ products }) {
	const { id } = products;
	// const isOpen = useSelector((state) => state.sidebar.isOpen);
	const cartProductsList = useSelector((state) => cart.selectAll(state));
	const getProductOnCart = useSelector((state) => cart.selectById(state, id));
	const dispatch = useDispatch();
	const [ref, isHovered] = useHover();

	const addItemToCart = () => {
		let isQty = isUndefined(getProductOnCart);
		let quantity = 1;
		let newItemProduct = {
			...products,
			quantity,
			total: products.price,
		};

		const notify = (content) => toast(content);
		// check if product already exist in the cart.
		let idAlreadyExists = cartProductsList.find((product) => product.id == id);
		// otherwise add new product in the cart
		notify(
			<Card
				rowPos='d-flex justify-content-center align-items-center'
				shape='circle'
				size='xsmall'
				thumbnail={require(`../../../../Assets/Products/${newItemProduct.sku}.png`)}
				{...newItemProduct}></Card>
		);
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
		<div key={id} className={`${style.product} p-4`} ref={ref}>
			<Card
				rowPos=' d-flex flex-column justify-content-center align-items-center pt-5'
				shape='circle'
				size='medium'
				thumbnail={require(`../../../../Assets/Products/${products.sku}.png`)}
				{...products}>
				<Button
					style={isHovered ? 'visible' : 'invisible'}
					handleClick={() => {
						addItemToCart(products);
					}}>
					<span>Add</span>
				</Button>
			</Card>
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

{
	/* <div className='card p-4'>
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
		</div> */
}
