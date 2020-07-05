import { combineReducers } from 'redux';

//import local files
import sideBarReducer from './SideBar.js';
import cartReducer from './CartSlice.js';
import productsReducer from './ProductsSlice.js';

const rootReducer = combineReducers({
	sideBar: sideBarReducer,
	cart: cartReducer,
	products: productsReducer,
});

export default rootReducer;
