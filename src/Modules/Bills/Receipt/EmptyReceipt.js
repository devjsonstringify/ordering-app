import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyReceipt() {
	return (
		<div className='alert alert-warning' role='alert'>
			<h4 className='alert-heading'>Oops!</h4>
			<p>Aww yeah, No receipt found here.</p>
			<hr />
			<p className='mb-0 d-flex justify-content-between'>
				Please add order to your cart.
				<span>
					<Link to='/'>Add products now?</Link>
				</span>
			</p>
		</div>
	);
}
