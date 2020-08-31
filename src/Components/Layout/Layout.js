// import react library
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//import local files
import style from './index.module.scss';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
	// Toggle sidebar cart
	const showSidebar = useSelector((state) => state.sideBar.show);
	return (
		<div className='container-fluid p-0 '>
			<div className={`d-flex align-items-stretch ${style.layout}`}>
				<div className={` ${style.nav}`}>
					<Navigation />
				</div>
				<div className={`${style.main} container`}>
					<Main>{children}</Main>
				</div>
				{showSidebar && (
					<div className={`${style.sidebar}`}>
						<Sidebar />
					</div>
				)}
			</div>
		</div>
	);
}

Layout.propsTypes = {
	children: PropTypes.any,
};
