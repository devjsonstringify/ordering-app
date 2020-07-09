// import react library
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

//import local files
import SelectBox from '../SelectBox';

//state management files
import { updateSort } from '../../../Ducks/Slices/SortSlice.js';

// sort product price based on price
const sortBy = [
	{ value: '', label: 'Select' },
	{ value: 'lowestprice', label: 'Lowest to highest' },
	{ value: 'highestprice', label: 'Highest to lowest' },
];

export default function Sort() {
	// variable declaration
	const dispatch = useDispatch();
	const sort = useSelector((state) => state.sort.type);

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
	sort: PropTypes.string.isRequired,
};
