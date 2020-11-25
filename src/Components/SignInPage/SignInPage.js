import React from 'react';

// import local files
import './style.scss';
import AccountProfile from '../AccountProfile';
import Header from '../Header';

function SignInPage() {
  return (
    <div className="sign-in-page container p-5">
      <Header
        regular="Please sign-in first with your Google account."
        strong="In order to proceed,"
      />
      <div className="sign-in-button mt-5 border border-5  rounded-pill w-25 bg-primary">
        <AccountProfile />
      </div>
    </div>
  );
}

export default SignInPage;
