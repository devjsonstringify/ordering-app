import React, { useState } from 'react';

//import local files
import style from './index.module.scss';

export function Card({ data, cardClicked }) {
	const [toggleAddToCart, setToggleAddToCart] = useState(false);
	return (
		<div
			className={`col rounded ${style.col}`}
			onMouseEnter={() => setToggleAddToCart(true)}
			onMouseLeave={() => setToggleAddToCart(false)}
			data-sku={data.sku}>
			<div className='card p-4'>
				<img
					className={`text-center ${style.img}`}
					src={require(`../../Assets/images/Foods/${data.sku}.png`)}
					alt='name'></img>
				<div className='card-body text-primary text-center'>
					<h5 className='card-title text-dark'>{data.name}</h5>
					<p className='card-text'>${data.price}</p>
				</div>
				{toggleAddToCart && (
					<button
						type='button'
						className='btn btn-primary'
						onClick={cardClicked}>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
}
