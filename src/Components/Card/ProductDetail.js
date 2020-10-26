import React from 'react';

// import local file
import style from './index.module.scss';

export default function ProductDetail({ name, price }) {
	return (
		<div className='p-3 text-left'>
			<h5 className={`${style.name}`}>{name}</h5>
			<h6>${price}</h6>
		</div>
	);
}
