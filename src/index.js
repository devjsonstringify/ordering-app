import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
// import 'firebase/auth';

import configuration from './config/Firebase.js';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import * as serviceWorker from './serviceWorker';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import local files
import App from './App';
import { store, persistor } from './Ducks/Store';

toast.configure({
	position: 'top-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
});

// react-redux-firebase config
const rrfConfig = {
	userProfile: 'products',
	useFirestoreForProfile: true,
	enableLogging: false,
};
try {
	// Initialize firebase instance
	firebase.initializeApp(configuration);
} catch (error) {
	console.log(error);
}

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<App />
			</ReactReduxFirebaseProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
