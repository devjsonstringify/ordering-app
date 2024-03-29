// import react library
import React from 'react';
import PropTypes from 'prop-types';

export default function Main({ children, mainClasses }) {
	let style = ['main col p-sm-5'];
	style.push(mainClasses);
	return <div className={style.join(' ')}>{children}</div>;
}

Main.propsTypes = {
	children: PropTypes.elements,
	mainClasses: PropTypes.string,
};
