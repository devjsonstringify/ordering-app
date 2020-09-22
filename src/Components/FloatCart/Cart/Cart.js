import React from 'react';
import { useSelector } from 'react-redux';

// import file
import Product from './CartProduct';
// state  management
import { cart } from '../../../Ducks/Features/CartSlice';
export default function Cart() {
	const productsOnCart = useSelector((state) => cart.selectAll(state));
	return (
		<div className='cart'>
			{productsOnCart.map((product) => (
				<Product product={product} key={product.id} />
			))}
		</div>
	);
}
