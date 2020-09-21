import React from 'react';

import Shelf from './../Modules/Shelf/';
import Spinner from './../Components/Spinner';
import Layout from './../Components/Layout';
import Filter from './../Modules/Shelf/Filter';

export default function App() {
	return (
		<div className='app'>
			<Layout>
				<Filter />
				<Shelf />
			</Layout>
		</div>
	);
}
