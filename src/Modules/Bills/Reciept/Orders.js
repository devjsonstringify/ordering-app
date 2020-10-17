import _ from 'lodash';
import React from 'react';

import Table from './Table.js';
export default function Orders(props) {
	const checkoutdetail = Object.values(props);
	const findOrders = Object.values(checkoutdetail[0])[0];
	return (
		<div className='border-top'>
			<Table>
				<thead>
					<tr>
						<th scope='col' colSpan='2'>
							Quantity
						</th>
						<th scope='col' colSpan='2'>
							Description
						</th>
						<th className='text-right' scope='col' colSpan='2'>
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{findOrders.map(({ quantity, name, price }) => {
						return (
							<tr key={`${name}`}>
								<td scope='col' colSpan='2'>
									{quantity > 1 ? `${quantity}pcs` : `${quantity}pc`}
								</td>
								<td scope='col' className='text-capitalize' colSpan='2'>
									{name}
								</td>
								<td className='text-right' scope='col' colSpan='2'>
									${price}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
