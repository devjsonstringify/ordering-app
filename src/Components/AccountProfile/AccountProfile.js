/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import isEmpty from 'lodash/isEmpty';

// import local files
import Login from './Login';
import Logout from './Logout';

// state management files
import { getCurrentUser, setAuthentication } from '../../Ducks/Features/userProfile';

function AccountProfile(props) {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.user.providerData);
  const isAuth = useSelector((state) => state.user.isAuthenticated.isAuth);

  useEffect(() => {
    // Get the currently signed-in use
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { providerData } = user;
        dispatch(getCurrentUser(providerData));
        dispatch(setAuthentication({ isAuth: true, isError: false, message: '' }));
      } else {
        dispatch(setAuthentication({ isAuth: false, isError: true, message: 'Need to sign-in' }));
      }
    });
  }, [dispatch]);
  return <>{isEmpty(getUser) && !isAuth ? <Login {...props} /> : <Logout {...props} />}</>;
}

export default AccountProfile;
