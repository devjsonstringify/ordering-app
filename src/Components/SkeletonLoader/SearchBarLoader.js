/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

export default function SearchBarLoader(props) {
  const [size] = useState({ width: '100%', height: '100%' });
  return (
    <ContentLoader
      speed={1}
      width={size.width}
      height={size.height}
      style={{ width: `100%` }}
      viewBox="0 0 1000 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25%" y="2" rx="20" ry="20" width="50%" height="30" />
      <rect x="85" y="70" rx="0" ry="0" width="15" height="0" />
      <rect x="25%" y="50%" rx="0" ry="0" width="9%" height="24" />
      <rect x="35%" y="50%" rx="0" ry="0" width="9%" height="24" />
      <rect x="45%" y="50%" rx="0" ry="0" width="9%" height="24" />
      <rect x="55%" y="50%" rx="0" ry="0" width="9%" height="24" />
      <rect x="65%" y="50%" rx="0" ry="0" width="9%" height="24" />
    </ContentLoader>
  );
}
