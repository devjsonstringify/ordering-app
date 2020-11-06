// import react library
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Navigation from '../Navigation/Navigation';
import Main from '../Main';

// state management
import SideBar from '../Sidebar';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="container-fluid h-100">
      <div className="flex-column ml-sm-auto ml-0 mr-sm-auto mr-0 row">
        <Navigation />
        <Main>{children}</Main>
      </div>
      <SideBar />
    </div>
  );
}

Layout.propsTypes = {
  children: PropTypes.node,
};
