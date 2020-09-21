// import react library
import React from 'react';
import PropTypes from 'prop-types';

//import local files
import Sort from './../Sort';
import Header from '../../../Components/Header';

export default function ShellHeader({ quantity }) {
	return (
		<Header
			strong='Choose'
			regular='Order'
			classes='sortBy align-items-center mb-4'>
			<Sort />
		</Header>
	);
}

ShellHeader.propsTypes = {
	productsLength: PropTypes.object.isRequired,
};
