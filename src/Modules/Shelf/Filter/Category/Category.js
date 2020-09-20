// import react library
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
// import local files
import './index.module.scss';
import Thumb from '../../../../Components/Thumb/Thumb';
import Button from '../../../../Components/Button/Button';

export default function Category(props) {
	let newProps = props.visibility.slice(5);
	return (
		<Button {...props}>
			<Thumb
				thumbnail={require(`../../../../Assets/Icons/${newProps.toLowerCase()}.png`)}
			/>
			<h5
				className={`text-center border ${
					props.btn.slice(5) === newProps ? 'active' : ' '
				}`}>
				{newProps}
			</h5>
		</Button>
	);
}
Category.prototype = {
	filter: PropTypes.string,
	category: PropTypes.string,
	dispatch: PropTypes.func,
};
