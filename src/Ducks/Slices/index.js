// import react library
import { combineReducers } from 'redux';

// import local files
import sideBarReducer from './SideBar.js';
import cartReducer from './CartSlice.js';
import productsReducer from './ProductsSlice.js';
import sortReducer from './SortSlice.js'

// root reducers
const rootReducer = combineReducers({
	sideBar: sideBarReducer,
	cart: cartReducer,
	products: productsReducer,
	sort: sortReducer
});

export default rootReducer;
