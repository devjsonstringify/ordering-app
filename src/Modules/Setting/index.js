import React from 'react';

// import local files
import Layout from '../../Components/Layout';

function Setting() {
  return <Layout>setting page</Layout>;
}

export default {
  routeProps: {
    path: '/setting',
    component: Setting,
  },
  name: 'Setting',
};
