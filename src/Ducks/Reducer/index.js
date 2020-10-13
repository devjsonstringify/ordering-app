// import react library
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
// import local files
import sideBarReducer from '../../Ducks/Features/SideBar.js';
import cartReducer from '../../Ducks/Features/CartSlice.js';
import productsReducer from '../../Ducks/Features/ProductsSlice.js';
import sortReducer from '../../Ducks/Features/SortSlice.js';
import filterReducer from '../../Ducks/Features/FilterSlice.js';
import searchReducer from '../../Ducks/Features/SearchSlice.js';
import checkoutReducer from '../../Ducks/Features/CheckOut.js';

// root reducers
const rootReducer = combineReducers({
	sideBar: sideBarReducer,
	cart: cartReducer,
	products: productsReducer,
	sort: sortReducer,
	filter: filterReducer,
	searchQuery: searchReducer,
	checkOut: checkoutReducer,
	firebase: firebaseReducer,
});

export default rootReducer;
