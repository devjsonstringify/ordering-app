/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonIcons({ status }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case 'success':
            return <p>success</p>;
          case 'processing':
            return (
              <h4 className="text-uppercase">
                <span>
                  processing...
                  <img src={require(`../../../Assets/images/loading.gif`)} alt="loading.gif" />
                </span>
              </h4>
            );
          default:
            return <p>Proceed to checkout</p>;
        }
      })()}
    </div>
  );
}

ButtonIcons.propTypes = {
  status: PropTypes.string.isRequired,
};
