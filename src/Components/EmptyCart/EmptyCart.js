import React from 'react';
import { Link } from 'react-router-dom';

// import local file
import './style.scss';
import Thumb from '../Thumb';
import icecream from '../../Assets/doodle/IceCreamDoodle.svg';

export default function EmptyCart() {
  return (
    <div className="empty-cart-component h-100 m-4 p-3 position-relative">
      <div className="m-auto text-body text-center">
        <Link to="/">
          <h5>
            <span className="mr-3">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-square-fill"
                fill="#e7201f"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
                />
              </svg>
            </span>
            Add some products in the cart
          </h5>
        </Link>

        <div className="wobble-hor-bottom">
          <Thumb thumbnail={icecream} />
        </div>
      </div>
    </div>
  );
}
