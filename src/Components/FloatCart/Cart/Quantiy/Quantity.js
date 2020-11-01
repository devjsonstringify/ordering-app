import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../Button';

// state management
import { checkOutIsSubmit } from '../../../../Ducks/Features/CheckOut.js';
export default function Quantity({
	classes,
	minimumProduct,
	handleDecrementQuantity,
	quantity,
	handleIncrementQuantity,
}) {
	let style = ['quantity'];
	style.push(classes);
	const dispatch = useDispatch();
	const isSubmit = useSelector((state) => state.checkOut.isSubmit);
	return (
		<div className={style.join(' ')}>
			{!isSubmit ? (
				<Button
					style='btn-light mx-sm-1 mx-0'
					disabled={minimumProduct}
					handleClick={handleDecrementQuantity}>
					<span className='text-body h4'>-</span>
				</Button>
			) : null}

			<h5 className='text-body'>{`${
				isSubmit ? `Quantity ${quantity}` : `X ${quantity}`
			}`}</h5>
			{!isSubmit ? (
				<Button
					style='btn-light mx-sm-1 mx-0'
					handleClick={handleIncrementQuantity}>
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
