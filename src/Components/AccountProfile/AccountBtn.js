/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Button from '../Button';

function AccountBtn({ handleClick, text }) {
  return (
    <div className="w-auto align-items-center d-flex">
      <Button handleClick={handleClick}>
        <p className="m-0">{text}</p>
      </Button>
    </div>
  );
}
AccountBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default AccountBtn;
