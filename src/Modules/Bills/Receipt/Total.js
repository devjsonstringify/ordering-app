import React from 'react';
import PropTypes from 'prop-types';

export default function Total({ subTotal, tax, total }) {
  return (
    <div className="order_total border-top">
      <ul className="list-group p-3 list-unstyled" key={subTotal}>
        <li>
          <h6 className="d-flex justify-content-between align-items-center">
            Sub Total:
            <span>${subTotal}</span>
          </h6>
        </li>
        <li>
          <h6 className="d-flex justify-content-between align-items-center">
            Tax: <span>${tax}</span>
          </h6>
        </li>
        <li>
          <h6 className="d-flex justify-content-between align-items-center">
            GST
            <span>2.5%</span>
          </h6>
        </li>
        <li>
          <h5 className="d-flex justify-content-between align-items-center font-weight-bolder">
            Total:
            <span>${total}</span>
          </h5>
        </li>
      </ul>
    </div>
  );
}

Total.propTypes = {
  subTotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
