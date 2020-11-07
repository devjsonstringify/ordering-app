/* eslint-disable global-require */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import files
import './style.scss';
import { cart, updateCart, deleteCart } from '../../../../Ducks/Features/CartSlice';
import Card from '../../../Card';
import Quantity from '../Quantity';
import QuantityTotal from './QuantityTotal';

export default function Product({ product }) {
  const { id, price, name, sku, quantity } = product;
  const cartId = useSelector((state) => cart.selectById(state, id));
  const isSubmit = useSelector((state) => state.checkOut.isSubmit);
  const dispatch = useDispatch();
  const minimumProduct = cartId.quantity < 2;
  const calculateAmount = quantity * price;

  const handleDecrementQuantity = () => {
    dispatch(
      updateCart({
        id,
        changes: {
          quantity: cartId.quantity - 1,
          total: cartId.quantity * price - price,
        },
      })
    );
  };

  const handleIncrementQuantity = () => {
    dispatch(
      updateCart({
        id,
        changes: {
          quantity: cartId.quantity + 1,
          total: cartId.quantity * price + price,
        },
      })
    );
  };
  return (
    <div className="cart-item pb-1 product">
      <div className="cart-item-details">
        <Card
          rowPos="flex-fill d-flex "
          shape="square"
          size="large"
          // eslint-disable-next-line import/no-dynamic-require
          thumbnail={require(`../../../../Assets/Products/${sku}.png`)}
          {...{ id, name, price, sku }}
        />
        <div className="d-flex align-items-baseline">
          <QuantityTotal classes="col" amount={calculateAmount} />
          <Quantity
            handleDecrementQuantity={() => handleDecrementQuantity()}
            handleIncrementQuantity={() => handleIncrementQuantity()}
            minimumProduct={minimumProduct}
            quantity={quantity}
            classes="d-flex justify-content-sm-end justify-content-start align-items-center col flex-grow-1 pl-sm-auto pl-0"
          />
          {!isSubmit ? (
            <button
              type="button"
              className="btn btn-link p-0 col-1"
              onClick={() => dispatch(deleteCart(id))}
            >
              <svg
                width="1.25em"
                height="1.25em"
                viewBox="0 0 16 16"
                className="bi bi-trash"
                fill="#ff2351"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
Product.defaultProps = {
  product: PropTypes.shape({
    id: 0,
    price: 0,
    quantity: 0,
    sku: '',
    name: '',
  }),
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    sku: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
