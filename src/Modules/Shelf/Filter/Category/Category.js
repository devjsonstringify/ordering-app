// import react library
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import local files
import './index.module.scss';
import availableCategories from '../../../../Assets/Products/Products.js';
import { updateFilter } from './../../../../Ducks/Slices/FilterSlice.js';

export default function Category({ menu }) {
	const dispatch = useDispatch();
	// toggle active class on clicked image category
	function setElementActive(event) {
		return availableCategories.filter((item) => {
			return item.id == event ? (item.show = true) : (item.show = false);
		});
	}

	return (
		<div
			className={`card category p-4 align-items-center ${
				menu.show ? 'active bg-secondary' : ' '
			}  text-body`}
			onClick={() => {
				dispatch(updateFilter(menu.category));
				setElementActive(menu.id);
			}}>
			<img
				src={require(`../../../../Assets/images/Categories/${menu.thumbnail}.png`)}
				alt={name}
			/>
			<div className='card-body '>
				<h6 className='card-title'>{menu.category}</h6>
			</div>
		</div>
	);
}
