// import react library
import React from 'react';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';
export default function SelectBox({ options, handleOnChange }) {
	const createOptions = (options) =>
		options.map((o) => (
			<option value={o.value} key={o.value}>
				{o.label}
			</option>
		));

	return (
		<select
			className={`bg-transparent border-0 form-select-lg ${style.search}`}
			onChange={(e) => handleOnChange(e.target.value)}>
			{createOptions(options)}
		</select>
	);
}

SelectBox.propTypes = {
	options: PropTypes.array,
	handleOnChange: PropTypes.func,
};
