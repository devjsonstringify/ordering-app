import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isUndefined, toNumber } from 'lodash';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';

// import local files
import Header from './Header.js';
import Orders from './Orders.js';
import Total from './Total.js';
import Footer from './Footer.js';

export default function Receipt(props) {
	const [headerDetails, setHeaderDetails] = useState({});
	const checkout = { ...props };
	const mapProps = !isEmpty(checkout) && Object.values(checkout);
	let orders = mapProps.map(({ value }) => value.orders);
	const totals = mapProps.map(({ value }) => {
		return {
			subTotal: value.subTotal,
			tax: value.tax,
			taxRate: value.taxRate,
			total: value.total,
		};
	});

	useEffect(() => {
		let transactionId = mapProps.map(({ key }) => key).toString();
		if (!isUndefined(transactionId)) {
			const unixTimestamp = mapProps.map(({ value }) => value.startedAt);
			const unixTimestampToNumber = toNumber(unixTimestamp);
			const dateObject = new Date(unixTimestampToNumber);
			const humanDateFormat =
				isValid(dateObject) && format(dateObject, 'MM/dd/yyyy h:m:ss aaaa');

			setHeaderDetails({
				transaction: transactionId,
				timeStamp: humanDateFormat,
			});
		}
	}, [props]);

	return (
		<div className='order_receipt w-50 m-auto '>
			<Header details={headerDetails} />
			<Orders products={orders} />
			<Total {...totals} />
			<Footer {...checkout} />
		</div>
	);
}

Receipt.propTypes = {
	props: PropTypes.object,
};
