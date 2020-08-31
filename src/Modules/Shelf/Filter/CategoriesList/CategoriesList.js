// import react library
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import { VisibilityFilters } from '../../../../Ducks/Features/FilterSlice.js';
import Category from './../Category';
export default function CategoriesList() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<Category filter={VisibilityFilters.SHOW_ALL} category='hot' />
				<Category filter={VisibilityFilters.SHOW_BURGER} category='burger' />
				<Category filter={VisibilityFilters.SHOW_PIZZA} category='pizza' />
				<Category filter={VisibilityFilters.SHOW_SNACKS} category='snacks' />
				<Category
					filter={VisibilityFilters.SHOW_SOFTDRINKS}
					category='softdrinks'
				/>
				<Category filter={VisibilityFilters.SHOW_COFFEE} category='coffee' />
				<Category
					filter={VisibilityFilters.SHOW_ICECREAM}
					category='ice-cream'
				/>
			</div>
		</div>
	);
}

CategoriesList.prototype = {
	VisibilityFilters: PropTypes.object.isRequired,
};
