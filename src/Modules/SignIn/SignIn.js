import React from 'react';

// import local files
import Layout from '../../Components/Layout';
import AccountProfile from '../../Components/AccountProfile';
import Header from '../../Components/Header';

function SignIn() {
  return (
    <Layout>
      <div className="container p-5">
        <Header
          regular="Please sign-in first with your Google account."
          strong="In order to proceed,"
        />
        <div className="mt-5 align-items-center border border-5 d-flex justify-content-center rounded-pill w-25 border-dark">
          <AccountProfile />
        </div>
      </div>
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
