/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';

// import local files
import Button from '../Button';

function AccountBtn({ handleClick, text, ...rest }) {
  return (
    <div className="w-auto align-items-center d-flex">
      <Button handleClick={handleClick} {...rest}>
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
