import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fromUnixTime, format } from 'date-fns';
import { isEmpty, isUndefined } from 'lodash';

export default function Header({ details }) {
	return (
		<div className='bill_header'>
			<div>
				<h3 className='text-uppercase text-center'>
					Pagkaon - mini restaurant
				</h3>
				<address className='text-center'>
					101 Stadium Area #773-54-55 Northern Direction Hidden Games Leaf
					Village, Planet Earth 98000
				</address>
				<p className='text-left'>
					Transaction number:{' '}
					<span className='font-weight-bolder'>{details.transaction}</span>
				</p>
				<p className='text-left'>
					Served by:{' '}
					<span className='font-weight-bolder'>{details.timeStamp}</span>
				</p>
			</div>
			<div className='my p-3 text-center'>
				<h2>Order Details</h2>
			</div>
		</div>
	);
}
Header.propTypes = {
	props: PropTypes.object,
};
