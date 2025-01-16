import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    message: "",
  },
  reducers: {
    toggleCart: (state, action) => {
      const isExist = state.cartProducts.find((item) => item.id === action.payload.id);

      if (isExist) {
        // If the product already exists in the cart, remove it
        state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
      } else {
        // If the product does not exist, add it to the cart
        state.cartProducts.push({
          ...action.payload,
          total: action.payload.price,  // You can store the total price here if needed
        });
      }
    },
    // You can add more reducers for other cart actions (e.g., clearCart, updateQuantity, etc.)
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
