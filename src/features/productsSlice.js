import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null
}
const productsSlice = createSlice(
    {
        name: "products",
        initialState,
        reducers: {}
    }

);

export const productFetch = createAsyncThunk(
    "products/productFetch",
     async () => {
        const response = await axios.get("http://localhost:5005/products")
        return response?.data
    }
);

export default productsSlice.reducer;