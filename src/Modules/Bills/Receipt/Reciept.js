import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

// import local files
import Header from './Header.js';
import Orders from './Orders.js';
import Total from './Total.js';
import Footer from './Footer.js';

export default function Receipt(props) {
	const checkout = { ...props };
	const mapProps = !isEmpty(checkout) && Object.values(checkout);
	let transactionId = mapProps.map(({ key }) => key);
	let orders = mapProps.map(({ value }) => value.orders);
	const totals = mapProps.map(({ value }) => {
		return {
			subTotal: value.subTotal,
			tax: value.tax,
			taxRate: value.taxRate,
			total: value.total,
		};
	});

	return (
		<div className='order_receipt w-50 m-auto '>
			<Header transaction={transactionId} />
			<Orders products={orders} />
			<Total {...totals} />
			<Footer {...checkout} />
		</div>
	);
}

Receipt.propTypes = {
	props: PropTypes.object,
};
