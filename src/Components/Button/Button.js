import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ style, handleClick, disabled, children }) {
  const classes = ['btn'];
  classes.push(style);
  return (
    <button className={classes.join(' ')} type="button" onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: '',
  disabled: false,
};

Button.propTypes = {
  style: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
