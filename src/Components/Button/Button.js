import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
	style,
	type,
	handleClick,
	disabled,
	children,
}) {
	let classes = ['btn'];
	classes.push(style);
	return (
		<button
			className={classes.join(' ')}
			type={type || 'button'}
			onClick={handleClick}
			disabled={disabled || false}>
			{children}
		</button>
	);
}

Button.propTypes = {
	style: PropTypes.string,
	type: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	children: PropTypes.element,
};
