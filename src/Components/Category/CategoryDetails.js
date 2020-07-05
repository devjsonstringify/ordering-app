import React from 'react';

//import local files
import style from './index.module.scss';

export function CategoryDetails({ data }) {
	return (
		<div className='col rounded'>
			<div className='card p-4'>
				<img
					className={`text-center ${style.img}`}
					src={data.thumbnail}
					alt='name'></img>
				<div className='card-body text-primary text-center'>
					<p className='card-text'>{data.name}</p>
				</div>
			</div>
		</div>
	);
}
