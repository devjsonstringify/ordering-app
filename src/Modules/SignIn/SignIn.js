import React from 'react';

// import local files
import './style.scss';
import Layout from '../../Components/Layout';
import AccountProfile from '../../Components/AccountProfile';
import Header from '../../Components/Header';

function SignIn() {
  return (
    <Layout>
      <div className="sign-in-page container p-5">
        <Header
          regular="Please sign-in first with your Google account."
          strong="In order to proceed,"
        />
        <div className="sign-in-button mt-5 border border-5  rounded-pill w-25 bg-primary">
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
