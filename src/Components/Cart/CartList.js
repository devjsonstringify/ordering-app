import React from 'react';

// import file
import Product from './Product';
export default function CartList({ carts }) {
	console.log(carts);
	return (
		<div>
			{carts && carts.map((cart) => <Product key={cart.id} product={cart} />)}
		</div>
	);
}
