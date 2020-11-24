/* eslint-disable react/style-prop-object */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

// import local file
import style from './index.module.scss';
import CheckoutButton from './CheckoutButton';

// state management
import { cart, deleteAllCart } from '../../../Ducks/Features/CartSlice';
import { isToggle } from '../../../Ducks/Features/SideBar';
import {
  checkOutIsSubmit,
  getTransactionId,
  setBillNotify,
} from '../../../Ducks/Features/CheckOut';
import { setAuthentication } from '../../../Ducks/Features/userProfile';

export default function Checkout() {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const history = useHistory();
  const [checkoutDetails, setCheckoutDetails] = useState({
    orders: [],
    subTotal: null,
    taxRate: 0.025,
    tax: null,
    total: null,
    startedAt: firebase.database.ServerValue.TIMESTAMP,
  });
  const isAuth = useSelector((state) => state.user.isAuthenticated.isAuth);
  const [wasSent, updateSentState] = useState('idle');
  const productsOnCart = useSelector((state) => cart.selectAll(state));
  const calculateTotal = productsOnCart.reduce((prev, cur) => {
    return prev + cur.total;
  }, 0);

  const checkoutOrder = () => {
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
  };

  useEffect(() => {
    checkoutOrder();
  }, [productsOnCart, calculateTotal]);

  useEffect(() => {
    if (wasSent === 'verify') {
      history.push('/sign-in');
      dispatch(isToggle(false));
    }
  }, [wasSent, history, dispatch]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const {
          providerData: [{ uid }],
        } = user;

        if (uid.length > 0 && wasSent === 'success') {
          history.push('/bills');
        }
      }
    });
  }, [wasSent, history, firebase]);

  const verifyUser = () => updateSentState('verify');

  const addCheckout = async () => {
    updateSentState('processing');
    await firebase
      .push('checkout', checkoutDetails)
      .then((data) => {
        const {
          path: { pieces_ },
        } = data;
        const findId = Object.values(pieces_);
        const transactionId = findId[1];

        updateSentState('success');
        dispatch(getTransactionId(transactionId));
        dispatch(deleteAllCart());
        dispatch(checkOutIsSubmit(false));
        dispatch(isToggle(false));
      })
      .catch((error) => {
        updateSentState('verify');
        dispatch(
          setAuthentication({ isAuth: false, isError: true, message: JSON.stringify(error) })
        );
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
        <CheckoutButton
          isAuthenticated={isAuth}
          wasSent={wasSent}
          ProceedToCheckout={addCheckout}
          LoginBeforeCheckout={verifyUser}
        />
      </div>
    </div>
  );
}
