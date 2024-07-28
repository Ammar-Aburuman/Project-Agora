import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        CartArray : []
    },

    reducers: {
        add_item: (state,action) => {
            state.CartArray.push({...action.payload,amount:1})
        },
        increase: (state,action) => {
            const itemIndex = state.CartArray.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                (state.CartArray[itemIndex].amount) += 1;
            }
        },
        decrease: (state, action) => {
            const itemIndex = state.CartArray.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                if (state.CartArray[itemIndex].amount > 1) {
                    state.CartArray[itemIndex].amount -= 1;
                } else {
                    state.CartArray.splice(itemIndex, 1);
                }
            }
        },

        deleteItem: (state,action) => {
            const itemIndex = state.CartArray.findIndex(item => item.id ===action.payload.id);
           if (itemIndex !== -1) {
                state.CartArray.splice(itemIndex, 1);

        }
    }

        
    }
})

export const {add_item,increase,decrease, deleteItem} = CartSlice.actions

export default CartSlice.reducer