import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import filter from 'lodash/filter';
import flattenDeep from 'lodash/flattenDeep';
import toString from 'lodash/toString';
import toNumber from 'lodash/toNumber';
import isUndefined from 'lodash/isUndefined';
import { toast } from 'react-toastify';
// firebase
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// import local files
import './style.scss';
import Layout from '../../Components/Layout';
import Receipt from './Receipt';
import EmptyReceipt from './Receipt/EmptyReceipt';
import Spinner from '../../Components/Spinner';
import CallToAction from './CallToAction.js';

function Bills() {
  const [orders, setOrders] = useState([]);
  useFirebaseConnect([{ path: 'checkout' }]);
  const orderById = useSelector((state) => state.checkOut.transactionId);
  const checkout = useSelector((state) => state.firebase.ordered.checkout);
  const transactionId = toString([...orders].map((keys) => keys.key));
  const checkoutOrders = flattenDeep([...orders].map((keys) => keys.value.orders));
  const startedAt = toNumber([...orders].map((keys) => keys.value.startedAt));
  const subTotal = toNumber([...orders].map((keys) => keys.value.subTotal));
  const tax = toNumber([...orders].map((keys) => keys.value.tax));
  const taxRate = toNumber([...orders].map((keys) => keys.value.taxRate));
  const total = toNumber([...orders].map((keys) => keys.value.total));

  useEffect(() => {
    toast.dismiss();
    if (orderById.length > 0 && !isUndefined(checkout)) {
      const isOrder = filter(checkout, (item) => item.key === orderById);
      if (!isEmpty(isOrder)) setOrders(isOrder);
    }
  }, [orderById, checkout]);

  let content;
  if (!isLoaded(checkout)) {
    content = <Spinner />;
  } else if (!isEmpty(orders)) {
    // eslint-disable-next-line no-return-assign
    return (content = (
      <Layout>
        <div className="container m-auto bills row m-0 justify-content-between flex-column align-items-center">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Receipt
            {...{
              transactionId,
              checkoutOrders,
              startedAt,
              subTotal,
              tax,
              taxRate,
              total,
            }}
          />
          <CallToAction />
        </div>
      </Layout>
    ));
  } else if (isEmpty(orders)) {
    content = <EmptyReceipt />;
  }
  return <Layout>{content}</Layout>;
}

export default {
  routeProps: {
    path: '/bills',
    component: Bills,
  },
  name: 'Bills',
};
