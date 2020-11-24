import React from 'react';
import { useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { getCurrentUser, setAuthentication } from '../../../Ducks/Features/userProfile';

// import local files
import Button from '../AccountBtn';

function Logout() {
  const firebase = useFirebase();
  const dispatch = useDispatch();

  function handleEventLogout() {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch(
          setAuthentication({
            isAuth: false,
            isError: false,
            message: 'Log-out successfully',
          })
        );
        dispatch(getCurrentUser([]));
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        dispatch(
          setAuthentication({
            isAuth: false,
            isError: true,
            message: 'Log-out unsuccessfully',
            errorCode: JSON.stringify(error),
          })
        );
      });
  }
  return <Button text="Logout" handleClick={handleEventLogout} />;
}

export default Logout;
