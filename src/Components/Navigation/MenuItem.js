import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import file
import './style.scss';

export default function MenuItem({ href, item }) {
  return (
    <NavLink
      to={href}
      className="text-capitalize text-decoration-none px-2 py-3 mr-3"
      exact={href === '/'}
    >
      {item}
    </NavLink>
  );
}
MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
};
