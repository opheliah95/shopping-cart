import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
                if(itemIndex >=0) {
                    state.cartItems[itemIndex].cartQuantity += 1;
                    toast.info(`${state.cartItems[itemIndex].name} quantity increased to ${state.cartItems[itemIndex].cartQuantity}`, {
                        position: "bottom-left"
                    })
                }
                    
                else {
                    const tempProduct = {...action.payload, cartQuantity : 1};
                    state.cartItems.push(tempProduct);
                    toast.success(`${tempProduct.name} added to cart`, {
                        position: "bottom-left"
                    })
                }
                    
                state.cartTotalQuantity ++;
                state.cartTotalAmount +=parseFloat(action.payload?.price);

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        }
        
    }
);

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;