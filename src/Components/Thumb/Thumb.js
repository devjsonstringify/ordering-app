import React from 'react';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';

const Thumb = ({ name, thumbnail, size = '', shape = '' }) => {
	return (
		<div className={`${style.photoPlaceholder} ${style[size]} ${style[shape]}`}>
			{thumbnail && <img src={thumbnail} alt={name} title={name} />}
		</div>
	);
};
Thumb.propTypes = {
	thumnail: PropTypes.string,
};

export default Thumb;
