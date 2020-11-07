import React from 'react';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import local files
import rootReducer from '../Reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'checkOut'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);
export { store, persistor };
