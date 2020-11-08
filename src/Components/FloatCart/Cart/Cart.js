import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// import file
import Product from './CartProduct';
// state  management
import { cart } from '../../../Ducks/Features/CartSlice';

export default function Cart() {
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  return (
    <div className="cart">
      {productsOnCart.map((product) => (
        <Product product={product} key={uuidv4()} />
      ))}
    </div>
  );
}
