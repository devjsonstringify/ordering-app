import React from 'react';

// import local files
import './style.scss';
import Header from './Header';
import Menu from './Menu';
import Contact from './Contact';
import Copyright from './CopyRight';
import Form from './Form';

export default function Footer() {
  return (
    <div className="container-fluid footer p-0 mt-5">
      <div className="container">
        <div className="row">
          <div className="col container">
            <Header />
            <Menu />
            <Contact />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
}
