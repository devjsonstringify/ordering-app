import React from 'react';
import PropTypes from 'prop-types';
// import local file
import Thumb from './../Thumb';
import ProductDetail from './ProductDetail';

export default function Card(props) {
	let rowPosition = [];
	rowPosition.push(props.rowPos);
	return (
		<div className={rowPosition.join(' ')}>
			<Thumb {...props} />
			<ProductDetail {...props} />
			{props.children}
		</div>
	);
}

Card.propTypes = {
	props: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		category: PropTypes.string,
		price: PropTypes.number,
	}),
};
