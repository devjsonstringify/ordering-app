import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import local files
import './style.scss';
import FloatCart from '../FloatCart';

// state management
import { cart } from '../../Ducks/Features/CartSlice';
import { isToggle } from '../../Ducks/Features/SideBar';
import EmptyCart from '../FloatCart/EmptyCart';

export default function SideBar() {
  // local state
  const isOpen = useSelector((state) => state.sideBar.isOpen);
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  const dispatch = useDispatch();

  const classes = ['float_cart'];
  if (isOpen) {
    classes.push('float_cart--open');
  }
  return (
    <div className={classes.join(' ')}>
      {isOpen && (
        <div
          role="button"
          tabIndex="0"
          className="float_cart--close-btn"
          onClick={() => dispatch(isToggle(false))}
          onKeyDown={() => dispatch(isToggle(false))}
        >
          X
        </div>
      )}
      {!!isOpen && productsOnCart.length > 0 && <FloatCart />}
      {!!isOpen && productsOnCart.length < 1 && <EmptyCart />}
    </div>
  );
}
