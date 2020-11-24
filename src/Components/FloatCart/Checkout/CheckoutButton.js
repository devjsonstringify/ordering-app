/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Button from '../../Button';
import ButtonIcons from './ButtonIcons';

function CheckoutButton({ isAuthenticated, wasSent, ProceedToCheckout, LoginBeforeCheckout }) {
  return (
    <div>
      {isAuthenticated ? (
        <Button style="w-100" disabled={wasSent === 'success'} handleClick={ProceedToCheckout}>
          <h4 className="text-uppercase">
            <ButtonIcons status={wasSent} />
          </h4>
        </Button>
      ) : (
        <Button style="w-100" handleClick={LoginBeforeCheckout}>
          <h4 className="text-uppercase">
            <ButtonIcons status={wasSent} />
          </h4>
        </Button>
      )}
    </div>
  );
}

CheckoutButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  wasSent: PropTypes.string.isRequired,
  ProceedToCheckout: PropTypes.func.isRequired,
  LoginBeforeCheckout: PropTypes.func.isRequired,
};
export default CheckoutButton;
