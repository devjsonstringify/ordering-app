/* eslint-disable react/forbid-prop-types */
// import react library
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// import local files
import './style.scss';
import Product from './Product';
import ShellHeader from '../ShellHeader/ShellHeader';

export default function ProductList({ products }) {
  return (
    <>
      <ShellHeader quantity={products.length} />
      <div className="products d-flex flex-wrap justify-content-lg-start justify-content-between">
        {products.map((product) => (
          <Product key={uuidv4()} products={product} />
        ))}
      </div>
    </>
  );
}

ProductList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  products: PropTypes.array,
};
