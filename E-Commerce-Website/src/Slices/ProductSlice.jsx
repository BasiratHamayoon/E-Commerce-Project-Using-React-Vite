import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products from API
export const fetchProducts = createAsyncThunk(
    "product/allProduct",
    async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            return response.data;  // return the fetched products data
        } catch (error) {
            return error;  // return error if the request fails
        }
    }
);

// Product slice containing the product state and reducers
export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],  // holds the products array
        isLoading: false,  // indicates if data is being loaded
        message: "",  // holds any error messages
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;  // when fetching starts, set loading to true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;  // when fetching succeeds, set loading to false
            state.products = action.payload;  // save the fetched products
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;  // when fetching fails, set loading to false
            state.message = action.error.message;  // set the error message
        });
    }
});

// Export the reducer to be used in the store
export default productSlice.reducer;
