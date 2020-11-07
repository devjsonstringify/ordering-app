import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local files
import './style.scss';
import Button from '../Button';
import { isToggle } from '../../Ducks/Features/SideBar';
import { cart } from '../../Ducks/Features/CartSlice';

export default function CartIcon({ cartStyle }) {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sideBar.isOpen);
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  return (
    <Button
      style={`cart-mobile text-capitalize text-decoration-none h-100 ${cartStyle}`}
      handleClick={() => dispatch(isToggle(!sidebar))}
    >
      <p>
        <svg
          width="1.7em"
          height="1.7em"
          viewBox="0 0 16 16"
          className="bi bi-bag"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
          />
        </svg>
        <span
          className={`cart_quantity ${
            productsOnCart.length >= 99
              ? 'text-wrap border-0 w-auto rounded-pill'
              : 'rounded-circle'
          }`}
        >
          {productsOnCart.length}
        </span>
      </p>
    </Button>
  );
}
CartIcon.defaultProps = {
  cartStyle: '',
};
CartIcon.propTypes = {
  cartStyle: PropTypes.string,
};
