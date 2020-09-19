import React from 'react';
import PropTypes from 'prop-types';

// import local file
import Button from './../../Button';

export default function Quantity({
	classes,
	minimumProduct,
	handleDecrementQuantity,
	quantity,
	handleIncrementQuantity,
}) {
	let style = ['quantity'];
	style.push(classes);
	return (
		<div className={style.join(' ')}>
			<Button
				style='btn-light'
				disabled={minimumProduct}
				handleClick={handleDecrementQuantity}>
				<span className='text-secondary'>-</span>
			</Button>
			<span className='badge rounded-pill bg-light text-dark'>x{quantity}</span>
			<Button style='btn-light' handleClick={handleIncrementQuantity}>
				<span className='text-secondary'>+</span>
			</Button>
		</div>
	);
}

Quantity.propTypes = {
	minimumProduct: PropTypes.bool,
	handleDecrementQuantity: PropTypes.func.isRequired,
	quantity: PropTypes.number,
	handleIncrementQuantity: PropTypes.func.isRequired,
};
