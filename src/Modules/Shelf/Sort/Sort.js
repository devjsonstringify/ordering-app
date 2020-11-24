// import react library
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import local files
import SelectBox from '../SelectBox';

// state management files
import { updateSort } from '../../../Ducks/Features/SortSlice';

// sort product price based on price
const sortBy = [
  { value: '', label: '--select--' },
  { value: 'LOWEST_PRICE', label: 'Lowest' },
  { value: 'HIGHEST_PRICE', label: 'Highest' },
];

export default function Sort() {
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-baseline">
      <h5 className="font-weight-normal text-body">Sort by</h5>
      <SelectBox options={sortBy} handleOnChange={(value) => dispatch(updateSort(value))} />
    </div>
  );
}

Sort.protoTypes = {
  updateSort: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
};
