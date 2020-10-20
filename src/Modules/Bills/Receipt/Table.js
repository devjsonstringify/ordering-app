import React from 'react';

export default function Table({ caption = '', children }) {
	return (
		<div className='table-responsive'>
			<table className='table table-borderless table-hover '>
				<caption>{caption}</caption>
				{children}
			</table>
		</div>
	);
}
