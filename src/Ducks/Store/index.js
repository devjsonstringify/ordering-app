import React from 'react';
import { configureStore } from '@reduxjs/toolkit';

//import local files
import rootReducer from '../Slices';

const store = configureStore({
  reducer: rootReducer
});

export default store;
