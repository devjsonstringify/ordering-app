import React, { useEffect } from 'react';
import flattenDeep from 'lodash/flattenDeep';
import PropTypes from 'prop-types';

// import local files
import Table from './Table.js';

export default function Orders({ products }) {
	const items = flattenDeep(products);
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
					{items.map(({ quantity, name, price }) => {
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
Orders.propTypes = {
	props: PropTypes.object,
};
