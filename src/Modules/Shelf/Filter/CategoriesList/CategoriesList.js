// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import local files
import './style.scss';
import { VisibilityFilters } from '../../../../Ducks/Features/FilterSlice.js';
import { setVisibilityFilter } from './../../../../Ducks/Features/FilterSlice.js';
import Category from './../Category';
export default function CategoriesList() {
	const [products] = useState(
		Object.entries(VisibilityFilters)
			.map(([visibility]) => ({
				visibility,
			}))
			.map((obj) => ({
				...obj,
				active: false,
			}))
	);
	const [isActive, setIsActive] = useState('ALL');
	const dispatch = useDispatch();

	return (
		<div className={`product-categories d-flex flex-wrap mb-4`}>
			{products.map((item) => {
				return (
					<Category
						key={item.visibility}
						{...item}
						handleClick={(e) => {
							e.preventDefault;
							setIsActive(item.visibility);
							dispatch(setVisibilityFilter(item.visibility));
						}}
						btn={isActive}
					/>
				);
			})}
		</div>
	);
}

CategoriesList.prototype = {
	VisibilityFilters: PropTypes.object.isRequired,
};

// Credits: Below are the links helps me with this specific scenario
// https://stackoverflow.com/questions/55518798/how-to-add-active-class-to-clicked-item-in-reactjs
// https://stackoverflow.com/questions/38922998/add-property-to-an-array-of-objects
