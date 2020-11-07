import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import toNumber from 'lodash/toNumber';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import { toast } from 'react-toastify';

// import local files
import Header from './Header';
import Orders from './Orders';
import Total from './Total';
import Footer from './Footer';

// state management files
import { setBillNotify } from '../../../Ducks/Features/CheckOut';

export default function Receipt({
  transactionId,
  checkoutOrders,
  startedAt,
  subTotal,
  tax,
  total,
}) {
  const dispatch = useDispatch();
  const [headerDetails, setHeaderDetails] = useState({});
  const notification = useSelector((state) => state.checkOut.notifier);

  useEffect(() => {
    toast.dismiss();
    if (!isUndefined(transactionId)) {
      const unixTimestamp = startedAt;
      const unixTimestampToNumber = toNumber(unixTimestamp);
      const dateObject = new Date(unixTimestampToNumber);
      const dateFormat = isValid(dateObject) && format(dateObject, 'MM/dd/yyyy h:m:ss aaaa');

      setHeaderDetails({
        id: transactionId,
        timeStamp: dateFormat,
      });

      if (!notification) {
        toast.success('Thank you for your order 🙏');
        dispatch(setBillNotify(true));
      }
    }
  }, [startedAt, transactionId]);

  const { id, timeStamp } = headerDetails;

  return (
    <div className="row justify-content-center">
      <div className="order_receipt col-sm-auto col-md-auto col-lg-6 col-12">
        <Header {...{ id, timeStamp }} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Orders items={checkoutOrders} />
        <Total {...{ subTotal, tax, total }} />
        <Footer />
      </div>
    </div>
  );
}

Receipt.propTypes = {
  transactionId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  checkoutOrders: PropTypes.array.isRequired,
  startedAt: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  taxRate: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
