// import react library
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
// import local files
import style from './index.module.scss';
import Thumb from '../../../../Components/Thumb/Thumb';

export default function Category(props) {
	let newProps = props.visibility.slice(5);
	const isActive = props.btn.slice(5) === newProps ? true : false;
	const darkImage = isActive
		? require(`../../../../Assets/Icons/${newProps.toLowerCase()}.png`)
		: require(`../../../../Assets/Icons/dark/${newProps.toLowerCase()}.png`);
	// const isBtn = props.btn.slice(5) === newProps ? `py-4 bg-light` : 'py-4';
	return (
		<div
			className={` d-flex flex-column p-3  ${style.item} ${
				props.btn.slice(5) === newProps ? `${style.item__active}` : ''
			}`}
			onClick={props.handleClick}>
			<div
				className={
					isActive ? `p-1 border-white ${style.item__background}` : 'p-1'
				}>
				<Thumb size='msmall' thumbnail={darkImage} />
			</div>
			<h6
				className={`text-center text-capitalize my-3 ${
					isActive ? 'text-body' : ' '
				}`}>
				{newProps.toLowerCase()}
			</h6>
		</div>
	);
}
Category.prototype = {
	filter: PropTypes.string,
	category: PropTypes.string,
	dispatch: PropTypes.func,
};
