import React from 'react';
import { Link } from 'react-router-dom';

// import local files
import SocialMedia from './SocialMedia';

export default function Header() {
  return (
    <div className="footer_header">
      <div className="row row-cols-sm-2 row-cols-1 align-items-center my-5 border-bottom pb-4 ml-0 mr-0">
        <div className="col p-0">
          <Link to="/" className="navbar-brand  navbar-brand">
            Meal
          </Link>
        </div>
        <SocialMedia />
      </div>
    </div>
  );
}
