import React from 'react';
import { useSelector } from 'react-redux';

export default function SideBar() {
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	return (
		<div className='container-fluid'>
			<pre>
				<code>{JSON.stringify(cart, null, 2)}</code>
			</pre>
		</div>
	);
}
