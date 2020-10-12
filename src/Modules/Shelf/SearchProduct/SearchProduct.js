import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';
import Header from '../../../Components/Header';
import { getProductQuery } from '../../../Ducks/Features/SearchSlice';
export default function SearchProduct() {
	const [isQuery, setIsQuery] = useState('');

	const handleClearBtn = () => {
		setIsQuery('');
		dispatch(getProductQuery(''));
		console.log(isQuery);
	};

	const handleChangeBar = (e) => {
		setIsQuery(e.target.value);
		dispatch(getProductQuery(e.target.value));
	};

	const dispatch = useDispatch();
	return (
		<Header
			strong='Menu'
			regular='Category'
			classes='search flex-column align-items-center mb-4 text-center'>
			<div className={`input-group input-group-lg my-5 ${style.search}`}>
				<span className='input-group-text'>
					<svg
						width='1em'
						height='1em'
						viewBox='0 0 16 16'
						className='bi bi-search'
						fill='currentColor'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fillRule='evenodd'
							d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
						/>
						<path
							fillRule='evenodd'
							d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
						/>
					</svg>
				</span>
				<input
					type='text'
					className='form-control mr-4'
					aria-label='Sizing example input'
					placeholder='Search for food, coffee, etc'
					value={isQuery}
					onChange={(e) => handleChangeBar(e)}
				/>
				{isQuery.length > 0 && (
					<p onClick={() => handleClearBtn()}>
						<svg
							width='1.5em'
							height='1.5em'
							viewBox='0 0 16 16'
							className='bi bi-x-square-fill'
							fill='#e7201f'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'
							/>
						</svg>
					</p>
				)}
			</div>
		</Header>
	);
}
SearchProduct.propTypes = {
	dispatch: PropTypes.func,
};
