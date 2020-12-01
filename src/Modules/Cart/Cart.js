import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

// import local files
import Layout from '../../Components/Layout';
import FloatCart from '../../Components/FloatCart';
import EmptyCart from '../../Components/EmptyCart';
import { cart } from '../../Ducks/Features/CartSlice';

function Cart() {
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  return (
    <Layout>
      <>{!isEmpty(productsOnCart) ? <FloatCart /> : <EmptyCart />}</>
    </Layout>
  );
}

export default {
  routeProps: {
    path: '/cart',
    component: Cart,
  },
  name: 'Cart',
};
