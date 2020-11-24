/* eslint-disable react/style-prop-object */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

// import local files
import Button from '../AccountBtn';

// state management files
import { getCurrentUser, setAuthentication } from '../../../Ducks/Features/userProfile';

function Login() {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleEventLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // eslint-disable-next-line max-len
        // This gives you a Google Access Token. You can use it to access the Google API. The signed-in user info.
        const { user } = result;
        const { providerData } = user;
        dispatch(getCurrentUser(providerData));
        dispatch(
          setAuthentication({
            isAuth: true,
            isError: false,
            message: '',
            errorCode: '',
          })
        );
        history.push('/cart');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(getCurrentUser([]));
        dispatch(
          setAuthentication({
            isAuth: false,
            isError: true,
            message: errorMessage,
            errorCode,
          })
        );
        history.push('/sign-in');
      });
  }
  return <Button text="Login" handleClick={handleEventLogin} />;
}

export default Login;
