// import react library
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import local files
import './style.scss';
import Product from './Product';
import ShellHeader from '../ShellHeader/ShellHeader';

export default function ProductList({ products }) {
	return (
		<>
			<ShellHeader quantity={products.length} />
			<div className='products d-flex flex-wrap '>
				{products.map((product) => (
					<Product key={Math.random()} products={product} />
				))}
			</div>
		</>
	);
}

ProductList.propTypes = {
	products: PropTypes.array,
};
