import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        CartArray : []
    },

    reducers: {
        add_item: (state,action) => {
            state.CartArray.push(action.payload)
        }

    }
})

export const {add_item} = CartSlice.actions

export default CartSlice.reducer