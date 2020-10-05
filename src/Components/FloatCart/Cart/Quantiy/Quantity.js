import React from 'react';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../Button';
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
				style='btn-light mx-1'
				disabled={minimumProduct}
				handleClick={handleDecrementQuantity}>
				<span className='text-body h4'>-</span>
			</Button>

			<h5 className='text-body'>X {quantity}</h5>

			<Button style='btn-light mx-1' handleClick={handleIncrementQuantity}>
				<span className='text-body h4'>+</span>
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
