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
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
                if(itemIndex >=0)
                    state.cartItems[itemIndex].cartQuantity += 1;
                else {
                    const tempProduct = {...action.payload, cartQuantity : 1};
                    state.cartItems.push(tempProduct);
                }
                    
                state.cartTotalQuantity ++;
                state.cartTotalAmount +=parseFloat(action.payload?.price);
            }
        }
        
    }
);

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;