// import react library
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// impoer local files
import CategoriesList from './CategoriesList';
import availableCategories from '../../../Assets/Products/Products.js';

export default function Filter() {
	const [categories] = useState(availableCategories);
	return <CategoriesList menus={categories} />;
}

Filter.propTypes = {
	availableCategories: PropTypes.array,
};

// * inspiration of how to manipulate data based on requirements stackoverflow https://stackoverflow.com/questions/39966125/using-indexof-to-filter-an-array
