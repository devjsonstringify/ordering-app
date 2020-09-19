import React from 'react';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';

const Thumb = ({
	name,
	sku,
	size = '' || 'small',
	shape = 'circle' || 'square',
}) => {
	return (
		<div className={`${style.photoPlaceholder} ${style[size]} ${style[shape]}`}>
			<img
				src={require(`../../Assets/Products/${sku}.png`)}
				alt={name}
				title={name}
			/>
		</div>
	);
};
Thumb.propTypes = {
	sku: PropTypes.string,
};

export default Thumb;
