import React from 'react';

export default function cartButton(
	props,
	{ classes, type, handleClick, children }
) {
	return (
		<button class={classes} type={type} onClick={handleClick}>
			{children}
		</button>
	);
}
