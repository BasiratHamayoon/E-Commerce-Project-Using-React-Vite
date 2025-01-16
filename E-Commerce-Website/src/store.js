import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice"; 
import favoriteReducer from "./Slices/FavoriteSlice"; 

const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer, // Use the correct reducer name
  },
});

export default store;
