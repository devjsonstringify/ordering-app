import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Button from './../../../Components/Button';

export default function BillsBtn({
	text,
	icon,
	color,
	path,
	handleClick,
	style,
}) {
	return (
		<Button style={style} handleClick={handleClick}>
			{' '}
			<p className='m-0'>
				{icon ? (
					<span>
						<svg
							width='1em'
							height='1em'
							viewBox='0 0 16 16'
							className={`bi ${icon} mr-2`}
							fill={color}
							xmlns='http://www.w3.org/2000/svg'>
							path={path}
						</svg>
					</span>
				) : null}

				{text}
			</p>
		</Button>
	);
}
BillsBtn.propTypes = {
	props: PropTypes.object,
	text: PropTypes.string,
	icon: PropTypes.string,
	color: PropTypes.string,
	path: PropTypes.element,
	handleClick: PropTypes.func,
	style: PropTypes.string,
};
