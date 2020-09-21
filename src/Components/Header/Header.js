import React from 'react';

// import local file
import sass from './index.module.scss';
export default function Header({ classes, strong, regular, children }) {
	let style = ['row'];
	style.push(classes);

	return (
		<div className={style.join(' ')}>
			<div className='col-md-6  col-xs-12'>
				<header className={`list-inline ${sass.header}`}>
					<h3 className='list-inline-item'>
						{strong} <span>{regular}</span>
					</h3>
				</header>
			</div>
			<div className='col-md-6 col-xs-12 d-flex justify-content-end'>
				{children}
			</div>
		</div>
	);
}
