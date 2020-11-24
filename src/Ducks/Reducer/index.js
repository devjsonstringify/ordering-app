// import react library
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

// import local files
import sideBarReducer from '../Features/SideBar';
import cartReducer from '../Features/CartSlice';
import productsReducer from '../Features/ProductsSlice';
import sortReducer from '../Features/SortSlice';
import filterReducer from '../Features/FilterSlice';
import searchReducer from '../Features/SearchSlice';
import checkoutReducer from '../Features/CheckOut';
import userReducer from '../Features/userProfile';

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
  user: userReducer,
});

export default rootReducer;
