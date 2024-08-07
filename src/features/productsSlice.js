import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    items: [],
    status: null,
    error: null
}

export const productFetch = createAsyncThunk(
    "products/productFetch",
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5005/products")
            return response?.data
        } catch(err) {
            return(rejectWithValue.response.data)
        }
        
    }
);


const productsSlice = createSlice(
    {
        name: "products",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(productFetch.pending, (state, action) => {
                state.status = "pending"
            })
                .addCase(productFetch.fulfilled, (state, action) => {
                    state.status = "success"
                    state.items = action.payload
                })
                .addCase(productFetch.rejected, (state, action) => {
                    //immer
                    state.status = "rejected"
                    state.error = action.payload;
                })

        }
    }

);


export default productsSlice.reducer;