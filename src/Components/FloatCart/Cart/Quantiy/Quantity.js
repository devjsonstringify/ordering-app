import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../Button';

// state management

export default function Quantity({
	classes,
	minimumProduct,
	handleDecrementQuantity,
	quantity,
	handleIncrementQuantity,
}) {
	let style = ['quantity'];
	style.push(classes);

	const editCart = useSelector((state) => state.cart.isEdit);
	return (
		<div className={style.join(' ')}>
			{editCart ? (
				<Button
					style='btn-light'
					disabled={minimumProduct}
					handleClick={handleDecrementQuantity}>
					<span className='text-secondary'>-</span>
				</Button>
			) : null}

			<span className='badge rounded-pill bg-light text-dark'>x{quantity}</span>
			{editCart ? (
				<Button style='btn-light' handleClick={handleIncrementQuantity}>
					<span className='text-secondary'>+</span>
				</Button>
			) : null}
		</div>
	);
}

Quantity.propTypes = {
	minimumProduct: PropTypes.bool,
	handleDecrementQuantity: PropTypes.func.isRequired,
	quantity: PropTypes.number,
	handleIncrementQuantity: PropTypes.func.isRequired,
};
