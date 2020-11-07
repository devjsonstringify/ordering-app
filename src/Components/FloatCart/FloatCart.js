import React from 'react';

// import local file
import './style.scss';
import CartHeader from './CartHeader';
import Cart from './Cart';
import Checkout from './Checkout';

export default function FloatCart() {
  return (
    <div className="wrapper container pt-5 px-4">
      <CartHeader />
      <Cart />
      <Checkout />
    </div>
  );
}
