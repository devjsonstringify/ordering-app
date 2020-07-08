import React from 'react';

//import local files
import Product from './Product';

export default function ProductList({ products }) {
	return (
		<div className='foods-main-wrapper'>
			<div className='row row-cols-4 g-4'>
				{products.map((product) => (
					<Product key={product.sku} products={product} />
				))}
			</div>
		</div>
	);
}
