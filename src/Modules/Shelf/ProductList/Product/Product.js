// import react library
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local files
import style from './index.module.scss';

//state management
import { addToCart } from '../../../../Ducks/Features/CartSlice.js';

export default function Product({ products }) {
	//add quantity on the item
	let quantity = 1;
	const addItemToCart = { ...products, quantity };
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
					onClick={() => dispatch(addToCart(addItemToCart))}>
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
		sku: PropTypes.string,
	}),
};
