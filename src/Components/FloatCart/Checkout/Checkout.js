/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

// import local file
import style from './index.module.scss';
import Button from '../../Button';
import CheckoutButtonIcon from './CheckoutButtonIcon';

// state management
import { cart, deleteAllCart } from '../../../Ducks/Features/CartSlice';
import { isToggle } from '../../../Ducks/Features/SideBar';
import {
  checkOutIsSubmit,
  getTransactionId,
  setBillNotify,
} from '../../../Ducks/Features/CheckOut';

export default function Checkout() {
  const firebase = useFirebase();
  const [checkoutDetails, setCheckoutDetails] = useState({
    orders: [],
    subTotal: null,
    taxRate: 0.025,
    tax: null,
    total: null,
    startedAt: firebase.database.ServerValue.TIMESTAMP,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const [wasSent, updateSentState] = useState('idle');
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  const calculateTotal = productsOnCart.reduce((prev, cur) => {
    return prev + cur.total;
  }, 0);

  useEffect(() => {
    dispatch(setBillNotify(false));
    if (productsOnCart.length > 0) {
      setCheckoutDetails({
        ...checkoutDetails,
        orders: [
          ...productsOnCart.map(({ id, name, price, quantity }) => {
            return {
              id,
              name,
              price,
              quantity,
            };
          }),
        ],
        subTotal: calculateTotal.toFixed(2),
        tax: (calculateTotal * checkoutDetails.taxRate).toFixed(2),
        total: (calculateTotal * checkoutDetails.taxRate + calculateTotal).toFixed(2),
      });
    }
  }, [productsOnCart]);

  useEffect(() => {
    if (wasSent === 'success') {
      history.push('/bills');
    }
  }, [wasSent]);

  const addCheckout = () => {
    updateSentState('processing');
    return firebase
      .push('checkout', checkoutDetails)
      .then((data) => {
        const {
          path: { pieces_ },
        } = data;
        const findId = Object.values(pieces_);
        const transactionId = findId[1];

        setTimeout(() => {
          updateSentState('success');
          dispatch(getTransactionId(transactionId));
          dispatch(deleteAllCart());
          dispatch(checkOutIsSubmit(false));
          dispatch(isToggle(false));
        }, 1500);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const { subTotal, tax, total } = checkoutDetails;
  return (
    <div className={`mt-5 ${style.checkout}`}>
      <div className="cart-taxes mt-5">
        <h3 className="text-body text-left p-2">Order Summary</h3>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td className="text-body text-right">${subTotal}</td>
            </tr>
            <tr>
              <td>Tax rate (2.5%)</td>
              <td className="text-body text-right">${tax}</td>
            </tr>
            <tr className="border-top">
              <td className="h4 text-body font-weight-bold">Total</td>
              <td className="h4 text-body font-weight-bold text-right">${total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${style.cartTotal}`}>
        {/* eslint-disable-next-line react/style-prop-object */}
        <Button style="w-100" disabled={wasSent === 'success'} handleClick={() => addCheckout()}>
          <h4 className="text-uppercase">
            {' '}
            <CheckoutButtonIcon status={wasSent} />
          </h4>
        </Button>
      </div>
    </div>
  );
}
