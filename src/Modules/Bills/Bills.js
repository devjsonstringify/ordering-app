import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

//import local files
import Reciept from './Reciept';
import Layout from './../../Components/Layout';

// firebase
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function Bills(props) {
	const orderId = useSelector((state) => state.checkOut.transactionId);
	const [isQueryOkay, setIsQueryOkay] = useState(false);
	const [checkout, setCheckout] = useState({});
	useFirebaseConnect([
		{
			path: `checkout/${orderId}`,
			queryParams: ['parsed', 'limitToFirst=1'],
		},
	]);
	const checkOutDetails = useSelector((state) => state.firebase.data.checkout);

	useEffect(() => {
		if (_.isUndefined(checkOutDetails)) {
			setIsQueryOkay(false);
		}
		setIsQueryOkay(true);
	}, [checkOutDetails]);

	return (
		<Layout>
			<div className='container'>
				{!isLoaded(checkOutDetails) ? (
					'loading...'
				) : isEmpty(checkOutDetails) ? (
					'empty orders'
				) : isQueryOkay ? (
					<Reciept {...checkOutDetails} />
				) : (
					'error'
				)}
			</div>
		</Layout>
	);
}

export default {
	routeProps: {
		path: '/bills',
		component: Bills,
	},
	name: 'Bills',
};
