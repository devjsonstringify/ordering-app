/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
// import react library
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import local files
import CategoriesList from './CategoriesList';
import availableCategories from '../../../Assets/Products/Products';

export default function Filter() {
  const [categories] = useState(availableCategories);
  return <CategoriesList menus={categories} />;
}

Filter.propTypes = {
  // eslint-disable-next-line react/require-default-props
  availableCategories: PropTypes.array,
};

/* 
inspiration of how to manipulate data based on requirements stackoverflow https://stackoverflow.com/questions/39966125/using-indexof-to-filter-an-array
*/
