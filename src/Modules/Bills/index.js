import React from 'react';

//import local files
import Layout from './../../Components/Layout';


function Bills(props) {
  console.log(JSON.stringify(props.match.path, null, 2));
  return <Layout>this from Bills</Layout>;
}

export default {
  routeProps: {
    path: '/bills',
    component: Bills,
  },
  name: 'Bills',
};
