// import react library
import React from 'react';
import PropTypes from 'prop-types';

//import local files
import Sort from './../Sort';

export default function ShellHeader({ productsLength }) {
	return (
		<div
			className={
				!productsLength
					? 'd-none'
					: 'shelf-container-header my-3 d-flex justify-content-between'
			}>
			<small className='products-found lead text-dark '>
				<span>{productsLength} Product(s) found.</span>
			</small>
			<Sort />
		</div>
	);
}

ShellHeader.propsTypes = {
	productsLength: PropTypes.object.isRequired,
};
