import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import local file
import Button from '../../../Button';

export default function Quantity({
  classes,
  quantity,
  minimumProduct,
  handleDecrementQuantity,
  handleIncrementQuantity,
}) {
  const style = ['quantity'];
  style.push(classes);
  const isSubmit = useSelector((state) => state.checkOut.isSubmit);
  return (
    <div className={style.join(' ')}>
      {!isSubmit ? (
        <Button
          // eslint-disable-next-line react/style-prop-object
          style="btn-light mx-sm-1 mx-0"
          disabled={minimumProduct}
          handleClick={handleDecrementQuantity}
        >
          <span className="text-body h4">-</span>
        </Button>
      ) : null}

      <h5 className="text-body">{`${isSubmit ? `Quantity ${quantity}` : `X ${quantity}`}`}</h5>
      {!isSubmit ? (
        // eslint-disable-next-line react/style-prop-object
        <Button style="btn-light mx-sm-1 mx-0" handleClick={handleIncrementQuantity}>
          <span className="text-body h4">+</span>
        </Button>
      ) : null}
    </div>
  );
}

Quantity.defaultProps = {
  classes: '',
};
Quantity.propTypes = {
  classes: PropTypes.string,
  minimumProduct: PropTypes.bool.isRequired,
  handleDecrementQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  handleIncrementQuantity: PropTypes.func.isRequired,
};
