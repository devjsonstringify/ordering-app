import React from 'react';
import { toast } from 'react-toastify';
import { isEmpty, isUndefined } from 'lodash';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../../Components/Button';
import Notification from '../../../../Components/Notification';

export default function ProductButtons({
	item,
	idAlreadyExists,
	handleViewProduct,
	handleAddProduct,
}) {
	const notifyDetails = !isEmpty(item) && { ...item };
	const updateNotify = () => {
		toast.dismiss();
		toast('Your item has been updated!', {
			progressClassName: 'custom_progress',
		});
	};
	const addNotify = () => {
		toast.dismiss();
		toast(<Notification detail={notifyDetails} />, {
			progressClassName: 'custom_progress',
		});
	};
	return (
		<>
			{idAlreadyExists ? (
				<div className='d-flex justify-content-center my-2 products_buttons'>
					<Button
						style='d-block w-auto btn-lg m-1 rounded-0'
						handleClick={() => {
							handleAddProduct();
							updateNotify();
						}}>
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
					handleClick={() => {
						handleAddProduct();
						addNotify();
					}}>
					<span className='position-relative'>Add to Cart</span>
				</Button>
			)}
		</>
	);
}
ProductButtons.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number,
		category: PropTypes.string,
		description: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		quantity: PropTypes.number,
		sku: PropTypes.string,
	}),
	handleViewProduct: PropTypes.func,
	handleAddProduct: PropTypes.func,
};
