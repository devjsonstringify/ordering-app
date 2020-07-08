// import react library
import React from 'react';

//import local files
import Sort from './../Sort';

export default function ShellHeader(props) {
	return (
		<div className='shelf-container-header my-3 d-flex justify-content-between'>
			<small className='products-found lead text-dark '>
				<span>{props.productsLength} Product(s) found.</span>
			</small>
			<Sort />
		</div>
	);
}
