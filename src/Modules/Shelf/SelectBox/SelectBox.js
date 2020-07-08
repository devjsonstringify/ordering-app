import React from 'react';

export default function SelectBox({ options,  handleOnChange }) {
	const createOptions = (options) =>
		options.map((o) => (
			<option value={o.value} key={o.value}>
				{o.label}
			</option>
		));

	return (
		<select
			onChange={(e) => handleOnChange(e.target.value)}
		>
			{createOptions(options)}
		</select>
	);
}
