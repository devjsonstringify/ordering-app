// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import local files
import style from './index.module.scss';

//state management
import {
	addToCart,
	updateCart,
	cartList,
} from '../../../../Ducks/Features/CartSlice.js';

export default function Product({ products }) {
	const [quantity, setQuantity] = useState(1);
	const productId = products.id;
	const productsArray = useSelector((state) => cartList.selectAll(state));

	const addProductToCart = (item) => {
		const addItemToCart = {
			...item,
			id: item.id,
			quantity,
		};
		let idAlreadyExists = productsArray.find(
			(product) => product.id == productId
		);

		if (!idAlreadyExists) dispatch(addToCart(addItemToCart));
		setQuantity(quantity + 1);
		dispatch(
			updateCart({
				id: addItemToCart.id,
				changes: { quantity },
			})
		);
	};

	const dispatch = useDispatch();

	return (
		<div
			className={`col rounded ${style.col}`}
			key={Math.random()}
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
					className='btn btn-dark'
					onClick={() => {
						addProductToCart(products);
					}}>
					Add to cart <span>{productId}</span>
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
		sku: PropTypes.string,
	}),
};
