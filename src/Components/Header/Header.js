import React from 'react';

// import local file
export default function Header({ classes, strong, regular, children }) {
	let style = ['row'];
	style.push(classes);

	return (
		<div className={style.join(' ')}>
			<div className='col-md-6  col-xs-12'>
				<header className='list-inline'>
					<p className='list-inline-item h1 font-weight-bold'>{strong} </p>
					<p className='list-inline-item h1 font-weight-light'>{regular}</p>
				</header>
			</div>
			<div className='col-md-6 col-xs-12 d-flex justify-content-end'>
				{children}
			</div>
		</div>
	);
}
