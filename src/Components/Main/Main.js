// import react library
import React from 'react';
import PropTypes from 'prop-types';

export default function Main({ children }) {
	return <>{children}</>;
}

Main.propsTypes = {
	children: PropTypes.any,
};
