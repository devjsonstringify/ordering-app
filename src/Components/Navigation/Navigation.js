// import react library
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import local files
import './style.scss';
import MenuItem from './MenuItem';
import CartIcon from '../CartIcon';
import AccountProfile from '../AccountProfile';
import Thumb from '../Thumb';
import logo from '../../Assets/images/logo.png';

// state management
export default function Navigation() {
  const [menus] = useState([
    { item: 'shop', href: '/' },
    { item: 'cart', href: '/cart' },
    { item: 'bill', href: '/bills' },
  ]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
      <div className="app_logo">
        <a className="navbar-brand text-body" href="/">
          <Thumb thumbnail={logo} />
        </a>
      </div>
      <CartIcon />
      <button
        className="navbar-toggler border-0 mobile-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse align-self-baseline" id="navbarContent">
        <ul className="menu-items d-flex justify-content-sm-end mb-2 mb-lg-0 navbar-nav w-100 flex-row justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-center">
          <>
            {menus.map(({ item, href }) => (
              <li className="nav-item d-flex" key={uuidv4()}>
                <MenuItem {...{ item, href }} />
              </li>
            ))}
            <li className="nav-item d-flex">
              <AccountProfile />
            </li>
          </>
        </ul>
      </div>
    </nav>
  );
}
