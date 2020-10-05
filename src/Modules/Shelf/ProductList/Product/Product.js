// import react library
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isUndefined } from 'lodash';

// import local files
import './style.scss';
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
import ProductButtons from './ProductButtons';

export default function Product({ products }) {
	const { id } = products;
	// const isOpen = useSelector((state) => state.sidebar.isOpen);
	const cartProductsList = useSelector((state) => cart.selectAll(state));
	const getProductOnCart = useSelector((state) => cart.selectById(state, id));
	const dispatch = useDispatch();
	const [ref, isHovered] = useHover();
	// check if product already exist in the cart.
	let idAlreadyExists = cartProductsList.find((product) => product.id == id);

	const addItemToCart = () => {
		let isQty = isUndefined(getProductOnCart);
		let quantity = 1;
		let newItemProduct = {
			...products,
			quantity,
			total: products.price,
		};
		dispatch(isToggle(true));

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
			key={id}
			className={isHovered ? 'product d-block' : 'product'}
			ref={ref}>
			<Card
				rowPos=' d-flex flex-column justify-content-center'
				size='large'
				thumbnail={require(`../../../../Assets/Products/${products.sku}.png`)}
				{...products}>
				<ProductButtons
					idAlreadyExists={idAlreadyExists}
					handleViewProduct={() => console.log('view product')}
					handleAddProduct={() => addItemToCart(products)}
				/>
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
