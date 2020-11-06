import React from 'react';
import PropTypes from 'prop-types';

// import local file
import style from './index.module.scss';

export default function ProductDetail({ name, price }) {
  return (
    <div className="p-3 text-left">
      <h5 className={`${style.name}`}>{name}</h5>
      <h6>${price}</h6>
    </div>
  );
}
ProductDetail.defaultProps = {
  name: '',
  price: 0,
};
ProductDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
