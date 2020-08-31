// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import local files
import './index.module.scss';
import { setVisibilityFilter } from './../../../../Ducks/Features/FilterSlice.js';

export default function Category({ filter, category }) {
	const dispatch = useDispatch();
	return (
		<button
			type='button'
			className={`col m-1 border border-light rounded-lg pt-3 pb-3 `}
			onClick={(e) => {
				e.preventDefault;
				dispatch(setVisibilityFilter(filter));
			}}>
			<div className='border border-light d-flex justify-content-center rounded py-4'>
				<img
					className='img-thumbnail p-1'
					src={require(`../../../../Assets/Icons/${category}.png`)}
					alt={category}
				/>
			</div>
			<h5 className='text-center'>{category}</h5>
		</button>
	);
}
Category.prototype = {
	filter: PropTypes.string,
	category: PropTypes.string,
	dispatch: PropTypes.func,
};
