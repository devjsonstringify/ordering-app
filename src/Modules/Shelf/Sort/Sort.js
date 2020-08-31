// import react library
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

//import local files
import SelectBox from '../SelectBox';

//state management files
import { updateSort } from '../../../Ducks/Features/SortSlice.js';

// sort product price based on price
const sortBy = [
	{ value: '', label: 'Select' },
	{ value: 'LOWEST_PRICE', label: 'Lowest to highest' },
	{ value: 'HIGHEST_PRICE', label: 'Highest to lowest' },
];

export default function Sort() {
	const dispatch = useDispatch();
	return (
		<div className='sort'>
			Sort by
			<SelectBox
				options={sortBy}
				handleOnChange={(value) => dispatch(updateSort(value))}
			/>
		</div>
	);
}

Sort.protoTypes = {
	updateSort: PropTypes.func.isRequired,
	dispatch: PropTypes.func,
};
