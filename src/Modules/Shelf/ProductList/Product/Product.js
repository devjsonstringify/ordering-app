/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// import react library
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';

// import local files
import './style.scss';
import Card from '../../../../Components/Card';
import useHover from '../../../../Utilities/useHover';

// state management
import { addToCart, updateCart, cart } from '../../../../Ducks/Features/CartSlice';
import { isToggle } from '../../../../Ducks/Features/SideBar';
import ProductButtons from './ProductButtons';

export default function Product({ products }) {
  const { id, price, published, category, description, name, sku } = products;
  const cartProductsList = useSelector((state) => cart.selectAll(state));
  const getProductOnCart = useSelector((state) => cart.selectById(state, id));
  const dispatch = useDispatch();
  const [ref, isHovered] = useHover();

  // check if product already exist in the cart.
  const idAlreadyExists = cartProductsList.find((product) => product.id === id);

  const addItemToCart = () => {
    const isQty = isUndefined(getProductOnCart);
    const quantity = 1;
    const newItemProduct = {
      ...products,
      quantity,
      total: products.price,
    };

    if (!idAlreadyExists) dispatch(addToCart(newItemProduct));
    // if exist and not undefined, update quantity
    if (!isQty) {
      dispatch(
        updateCart({
          id: newItemProduct.id,
          changes: {
            quantity: getProductOnCart.quantity + 1,
            total: getProductOnCart.quantity * products.price + products.price,
          },
        })
      );
    }
  };

  return (
    <div key={id} className={isHovered ? 'product_listing d-block' : 'product_listing'} ref={ref}>
      <Card
        rowPos=" d-flex flex-column justify-content-center"
        size="large"
        thumbnail={require(`../../../../Assets/Products/${products.sku}.png`)}
        {...{ id, category, description, name, price, published, sku }}
      >
        <ProductButtons
          item={products}
          idAlreadyExists={idAlreadyExists}
          handleViewProduct={() => dispatch(isToggle(true))}
          handleAddProduct={() => addItemToCart(products)}
        />
      </Card>
    </div>
  );
}
Product.defaultProps = {
  products: PropTypes.shape({
    id: 0,
    price: 0,
    published: 0,
    quantity: 0,
    category: '',
    description: '',
    name: '',
    sku: '',
  }),
};
Product.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    published: PropTypes.number,
    quantity: PropTypes.number,
    sku: PropTypes.string,
  }),
};
