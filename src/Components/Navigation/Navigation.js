// import react library
import React, { useState } from 'react';

// import local files
import './style.scss';
import MenuItem from './MenuItem';
import CartIcon from '../CartIcon';

// state management
export default function Navigation() {
  const [menus] = useState([
    { item: 'shop', href: '/' },
    { item: 'bill', href: '/bills' },
  ]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
      <div className="app_logo">
        <a className="navbar-brand text-uppercase text-body navbar-brand" href="/">
          Pagkaon
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

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="menu-items d-flex justify-content-sm-end mb-2 mb-lg-0 navbar-nav w-100 flex-row justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-center">
          {menus.map(({ item, href }) => (
            <li className="nav-item d-flex" key={item}>
              <MenuItem {...{ item, href }} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
