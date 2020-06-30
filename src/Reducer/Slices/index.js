import { combineReducers } from 'redux';

//import local files
import navigation from './SideBar.js';

const rootReducer = combineReducers({
  navigation,
});

export default rootReducer;
