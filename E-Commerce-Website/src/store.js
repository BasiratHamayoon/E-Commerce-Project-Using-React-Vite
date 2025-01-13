// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/ProductSlice';  // Import productReducer

// Create the store with productSlice reducer
const store = configureStore({
  reducer: {
    product: productReducer,  // Add the product slice to the Redux store
  },
});

export default store;
