import React from 'react';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';

const Thumb = ({ name, thumbnail, size = '', shape = '' }) => {
	return (
		<div className={`${style.photoPlaceholder}  ${style[shape]}`}>
			{thumbnail && (
				<img
					className={`${style.photo} ${style[size]}`}
					src={thumbnail}
					alt={name}
					title={name}
				/>
			)}
		</div>
	);
};
Thumb.propTypes = {
	thumnail: PropTypes.string,
};

export default Thumb;
