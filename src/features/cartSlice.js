import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    error: null
}

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            // add item to cart
            addToCart(state, action) {
                state.cartItems.push(action.payload)
            }
        },
        extraReducers: {}
    }
);

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;