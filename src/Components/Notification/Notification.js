import React from 'react';
import { isUndefined } from 'lodash';
import PropTypes from 'prop-types';

// import local files
import Thumb from '../Thumb';
export default function Notification({ detail }) {
	return (
		<div className='d-flex justify-content-around align-items-center p-1'>
			{!isUndefined(detail.sku) && (
				<Thumb
					size='xxsmall'
					size='square'
					thumbnail={require(`../../Assets/Products/${detail.sku}.png`)}
				/>
			)}
			<p className='m-0 text-body d-flex  flex-column text-capitalize'>
				{detail.name}
				<span className='text-body text-lowercase'>Was added to your cart</span>
			</p>
		</div>
	);
}
Notification.propTypes = {
	detail: PropTypes.shape({
		id: PropTypes.number,
		category: PropTypes.string,
		description: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		quantity: PropTypes.number,
		sku: PropTypes.string,
	}),
};
