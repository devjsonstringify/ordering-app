import React from 'react';
import _ from 'lodash';

import Header from './Header.js';
import Orders from './Orders.js';
import Total from './Total.js';
import Footer from './Footer.js';

export default function Reciept(props) {
	const checkout = !_.isEmpty(props) && { ...props };

	return (
		<div className='order_reciept w-50 m-auto '>
			<Header {...checkout} />
			<Orders {...checkout} />
			<Total {...checkout} />
			<Footer {...checkout} />
		</div>
	);
}
