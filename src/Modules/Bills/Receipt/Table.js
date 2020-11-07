import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ caption, children }) {
  return (
    <div className="table-responsive">
      <table className="table table-borderless table-hover ">
        <caption>{caption}</caption>
        {children}
      </table>
    </div>
  );
}

Table.defaultProps = {
  caption: '',
};
Table.propTypes = {
  caption: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
