import React from 'react';

// import local file
import Button from '../../../../Components/Button';

export default function ProductButtons({
	idAlreadyExists,
	handleViewProduct,
	handleAddProduct,
}) {
	return (
		<>
			{idAlreadyExists ? (
				<div className='d-flex justify-content-center my-2 products_buttons'>
					<Button
						style='d-block w-auto btn-lg m-1 rounded-0'
						handleClick={handleAddProduct}>
						<span className='position-relative'>Add to Cart</span>
					</Button>
					<Button
						style='view_cart_btn d-block w-auto m-1 btn-lg rounded-0'
						handleClick={handleViewProduct}>
						<span className='position-relative'>View cart &#8594;</span>
					</Button>
				</div>
			) : (
				<Button
					style='d-block w-auto btn-lg m-auto my-2 rounded-0'
					handleClick={handleAddProduct}>
					<span className='position-relative'>Add to Cart</span>
				</Button>
			)}
		</>
	);
}
