import React from 'react';
import _ from 'lodash';
// import local file

export default function Total(props) {
	const checkoutdetail = Object.values(props);
	return (
		<div className='order_total border-top'>
			{checkoutdetail.map((order) => {
				return (
					<ul className='list-group p-3 list-unstyled' key={order.subTotal}>
						<li>
							<h6 className='d-flex justify-content-between align-items-center'>
								Sub Total:
								<span>${order.subTotal}</span>
							</h6>
						</li>
						<li>
							<h6 className='d-flex justify-content-between align-items-center'>
								Tax: <span>${order.tax}</span>
							</h6>
						</li>
						<li>
							<h6 className='d-flex justify-content-between align-items-center'>
								GST
								<span>${order.taxRate}%</span>
							</h6>
						</li>
						<li>
							<h5 className='d-flex justify-content-between align-items-center font-weight-bolder'>
								Total:
								<span>${order.total}</span>
							</h5>
						</li>
					</ul>
				);
			})}
		</div>
	);
}
