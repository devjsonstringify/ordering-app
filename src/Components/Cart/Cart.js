import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import file
import CartList from './CartList.js';
// state  management
import store from '../../Ducks/Store/';
import { cartAdapter, cartList } from '../../Ducks/Features/CartSlice.js';
export default function Cart() {
	const products = useSelector((state) => cartList.selectAll(state));
	return <CartList carts={products} />;
}
