/* eslint-disable react/forbid-prop-types */
import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

export default function Spinner(props) {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      speed={2}
      backgroundColor="transparent"
      style={{
        position: 'fixed',
        marginLeft: `-32px`,
        marginTop: `-32px`,
        top: `50%`,
        left: `50%`,
        width: `100px`,
        height: `100px`,
        zIndex: 10,
        borderRadius: `50px`,
        backgroundColor: `#000`,
      }}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  );
}

Spinner.propTypes = {
  // eslint-disable-next-line react/require-default-props
  prop: PropTypes.any,
};
