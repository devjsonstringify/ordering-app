import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Thumb from '../../../Components/Thumb';
import logo from '../../../Assets/images/logo.png';

export default function Header({ id, timeStamp }) {
  return (
    <div className="bill_header">
      <div>
        <div className="my-4">
          <Thumb thumbnail={logo} size="medium" />
        </div>
        <h2 className="text-uppercase text-center">MEAL - mini restaurant</h2>
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
