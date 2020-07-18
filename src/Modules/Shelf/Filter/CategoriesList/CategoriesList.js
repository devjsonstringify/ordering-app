// import react library
import React, { useState } from 'react';

// import local files
import Category from './../Category';
export default function CategoriesList({ menus }) {
	return (
		<div className='card-group'>
			{menus.map((menu) => (
				<Category key={`${menu.category}`} menu={menu} />
			))}
		</div>
	);
}
