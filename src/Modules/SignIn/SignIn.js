import React from 'react';

// import local files
import './style.scss';
import Layout from '../../Components/Layout';
import SignInPage from '../../Components/SignInPage';

function SignIn() {
  return (
    <Layout>
      <SignInPage />
    </Layout>
  );
}

export default {
  routeProps: {
    path: '/sign-in',
    component: SignIn,
  },
  name: 'sign-in',
};
