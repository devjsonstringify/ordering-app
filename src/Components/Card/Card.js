import React from 'react';
import PropTypes from 'prop-types';
// import local file
import Thumb from '../Thumb';
import ProductDetail from './ProductDetail';

export default function Card({ name, price, rowPos, size, thumbnail, children }) {
  const rowPosition = [];
  rowPosition.push(rowPos);

  return (
    <div className={rowPosition.join(' ')}>
      <Thumb {...{ name, thumbnail, size }} />
      <ProductDetail {...{ name, price }} />
      {children}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rowPos: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
