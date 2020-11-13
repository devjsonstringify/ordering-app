import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="footer_menu  mb-5">
      <h5>Navigation</h5>
      <ul className="list-group mb-4 ml-0 mr-0 pb-4">
        <li className="list-group-item bg-transparent pl-0 pb-0">
          <Link to="/"> Home</Link>
        </li>
        <li className="list-group-item bg-transparent pl-0 pb-0">
          <Link to="/bills"> Bills</Link>
        </li>
      </ul>
      <address>
        <p>
          101 Stadium Area #773-54-55 Northern Direction Hidden Games Leaf Village, Planet Earth
          98000
        </p>
      </address>
    </div>
  );
}
