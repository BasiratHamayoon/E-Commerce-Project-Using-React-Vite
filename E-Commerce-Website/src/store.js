import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice"; 
import favoriteReducer from "./Slices/FavoriteSlice"; 
import cartReducer from "./Slices/CartSlice"; // Corrected the import

const store = configureStore({
  reducer: {
    product: productReducer,
    favorite: favoriteReducer, 
    cart: cartReducer,  // Use the correct reducer name
  },
});

export default store;
