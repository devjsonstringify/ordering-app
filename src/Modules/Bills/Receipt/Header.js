import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ id, timeStamp }) {
  return (
    <div className="bill_header">
      <div>
        <h2 className="text-uppercase text-center">Pagkaon - mini restaurant</h2>
        <address className="text-center">
          101 Stadium Area #773-54-55 Northern Direction Hidden Games Leaf Village, Planet Earth
          98000
        </address>
        <p className="text-center m-0">
          Transaction number: <span className="font-weight-bolder ">{id}</span>
        </p>
        <p className="text-center m-0">
          Served by: <span className="font-weight-bolder">{timeStamp}</span>
        </p>
      </div>
      <div className="my p-3 text-center">
        <h2>Order Details</h2>
      </div>
    </div>
  );
}
Header.defaultProps = {
  id: '',
  timeStamp: '',
};
Header.propTypes = {
  id: PropTypes.string,
  timeStamp: PropTypes.string,
};
