import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Header({ transaction }) {
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
				<p className='text-center'>
					Term ID-transaction #:{' '}
					<span className='font-weight-bolder'>{transaction}</span>
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
