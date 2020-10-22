import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isUndefined from 'lodash/isUndefined';
import toNumber from 'lodash/toNumber';
import isEqual from 'lodash/isEqual';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import { toast } from 'react-toastify';

// import local files
import Header from './Header.js';
import Orders from './Orders.js';
import Total from './Total.js';
import Footer from './Footer.js';

// state management files
import { setBillNotify } from '../../../Ducks/Features/CheckOut.js';

export default function Receipt(props) {
	const dispatch = useDispatch();
	const [headerDetails, setHeaderDetails] = useState({});
	const checkout = { ...props };
	const mapProps = !isEmpty(checkout) && Object.values(checkout);
	let orders = mapProps.map(({ value }) => value.orders);
	const notify = () => toast.success('Thank you for your order 🙏');
	const notification = useSelector((state) => state.checkOut.notifier);
	const transaction = useSelector((state) => state.checkOut.transactionId);
	const totals = mapProps.map(({ value }) => {
		return {
			subTotal: value.subTotal,
			tax: value.tax,
			taxRate: value.taxRate,
			total: value.total,
		};
	});

	useEffect(() => {
		toast.dismiss();
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

			if (!notification) {
				toast.success('Thank you for your order 🙏');
				dispatch(setBillNotify(true));
			}
		}
	}, [props]);

	return (
		<div className='order_receipt col-6'>
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
