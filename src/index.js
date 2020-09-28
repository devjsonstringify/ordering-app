import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import local files
import App from './App';
import { store, persistor } from './Ducks/Store';

toast.configure({
	position: 'bottom-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
});

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
