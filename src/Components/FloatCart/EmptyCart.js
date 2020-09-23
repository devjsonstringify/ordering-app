import React from 'react';

// import local file
import Thumb from '../../Components/Thumb';

export default function EmptyCart() {
	return (
		<div className='h-100 m-4 p-3 position-relative'>
			<div className='m-auto text-body text-center'>
				<h5>Add some products in the cart</h5>
				<Thumb thumbnail={require(`../../Assets/doodle/IceCreamDoodle.svg`)} />
			</div>
		</div>
	);
}
