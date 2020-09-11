import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import Header from '../../../Components/Header';
import { getProductQuery } from '../../../Ducks/Features/SearchSlice';
export default function SearchProduct() {
	const dispatch = useDispatch();
	return (
		<Header strong='Menu' regular='Category'>
			<div className='input-group mb-3'>
				<span className='input-group-text bg-transparent'>&#128270;</span>
				<input
					type='text'
					className='form-control'
					aria-label='Sizing example input'
					placeholder='Search for food, coffee, etc'
					onChange={(e) => dispatch(getProductQuery(e.target.value))}
				/>
			</div>
		</Header>
	);
}
SearchProduct.propTypes = {
	dispatch: PropTypes.func,
};
