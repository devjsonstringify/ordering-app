import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import flatten from 'lodash/flatten';

//import local files
import Layout from './../../Components/Layout';

// firebase
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function Bills(props) {
	const orderId = useSelector((state) => state.checkOut.transactionId);
	useFirebaseConnect([{ path: `/checkout/${orderId}` }]);

	const checkOuDetails = useSelector((state) => state.firebase.data.checkout);

	// Show message while todos are loading
	if (!isLoaded(checkOuDetails)) {
		return <div>Loading...</div>;
	}

	// Show message if there are no todos
	if (isEmpty(checkOuDetails)) {
		return <div>orders List Is Empty</div>;
	}
	return (
		<Layout>
			<pre>
				// add edge cases if no productId found, in short no data yet
				{Object.values(checkOuDetails).map(({ orders }) => {
					return JSON.stringify(orders, null, 2);
				})}
			</pre>
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
