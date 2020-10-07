import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCZyOe6VGBE3S9_xhMr0G9TPyiD4H5xc28',
	authDomain: 'ordering-react-app.firebaseapp.com',
	databaseURL: 'https://ordering-react-app.firebaseio.com',
	projectId: 'ordering-react-app',
	storageBucket: 'ordering-react-app.appspot.com',
	messagingSenderId: '907690730662',
	appId: '1:907690730662:web:59a7efdd8dddf781354067',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
