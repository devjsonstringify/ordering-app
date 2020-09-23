import React from 'react';
import { useSelector } from 'react-redux';
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
	const editCart = useSelector((state) => state.cart.isEdit);
	return (
		<div className={style.join(' ')}>
			{editCart ? (
				<Button
					style='btn-light mx-1 '
					disabled={minimumProduct}
					handleClick={handleDecrementQuantity}>
					<span className='text-body h4'>-</span>
				</Button>
			) : null}

			<h5 className='text-body'>x{quantity}</h5>
			{editCart ? (
				<Button style='btn-light mx-1' handleClick={handleIncrementQuantity}>
					<span className='text-body h4'>+</span>
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
