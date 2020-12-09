/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

const BillLoader = (props) => {
  const [size] = useState({ width: '100%', height: '100%' });
  return (
    <div className="container">
      <ContentLoader
        speed={1}
        width={size.width}
        height={size.height}
        style={{ width: `100%` }}
        viewBox="0 0 400 1000"
        backgroundColor="#f0f0f0"
        foregroundColor="#e6e5e5"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="10%" />
        <rect x="0" y="11%" rx="0" ry="0" width="100%" height="10%" />
        <rect x="0" y="22%" rx="0" ry="0" width="100%" height="10%" />
        <rect x="0" y="34%" rx="0" ry="0" width="100%" height="15" />
        <rect x="0" y="36%" rx="0" ry="0" width="100%" height="15" />
        <rect x="0" y="38%" rx="0" ry="0" width="50%" height="15" />
      </ContentLoader>
    </div>
  );
};
export default BillLoader;
