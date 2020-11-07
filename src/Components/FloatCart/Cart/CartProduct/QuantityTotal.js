import React from 'react';
import PropTypes from 'prop-types';

export default function QuantityTotal({ amount, classes }) {
  const style = ['cart-amount', 'd-sm-block d-none'];
  style.push(classes);
  return (
    <div className={style.join(' ')}>
      <p className="text-body">Sub total: ${amount.toFixed(2)}</p>
    </div>
  );
}
QuantityTotal.defaultProps = {
  amount: 0,
  classes: '',
};
QuantityTotal.propTypes = {
  amount: PropTypes.number,
  classes: PropTypes.string,
};
