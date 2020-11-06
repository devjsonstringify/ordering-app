/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Thumb from '../Thumb';

export default function Notification(props) {
  const { name, sku } = props;
  return (
    <div className="d-flex justify-content-around align-items-center p-1">
      {/* eslint-disable-next-line global-require */}
      <Thumb size="xxsmall" thumbnail={require(`../../Assets/Products/${sku}.png`)} />

      <p className="m-0 text-body d-flex  flex-column text-capitalize">
        {name}
        <span className="text-body text-lowercase">Was added to your cart</span>
      </p>
    </div>
  );
}

Notification.propTypes = {
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
};
