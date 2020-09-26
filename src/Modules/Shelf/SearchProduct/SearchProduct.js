import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';
import Header from '../../../Components/Header';
import { getProductQuery } from '../../../Ducks/Features/SearchSlice';
export default function SearchProduct() {
	const dispatch = useDispatch();
	return (
		<Header
			strong='Menu'
			regular='Category'
			classes='search align-items-center mb-4'>
			<div className={`input-group input-group-lg mb-3 w-50 ${style.search}`}>
				<span className='input-group-text'>
					<svg
						width='1em'
						height='1em'
						viewBox='0 0 16 16'
						className='bi bi-search'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
						/>
						<path
							fillRule='evenodd'
							d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
						/>
					</svg>
				</span>
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
