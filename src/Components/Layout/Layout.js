// import react library
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//import local files
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import style from './index.module.scss';

// state management
import SideBar from '../Sidebar';

export default function Layout({ children }) {
	return (
		<div className='container-fluid h-100'>
			<div className='row flex-column'>
				<Navigation />
				<Main>{children}</Main>
			</div>
			<SideBar />
		</div>
	);
}

Layout.propsTypes = {
	children: PropTypes.element,
};
