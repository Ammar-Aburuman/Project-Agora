import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [{id:1, text:"Hello", price:500}],
};

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        additem: (state,action) => {
            const item = {
                id: nanoid(),
                text: action.payload,
                price: action.payload,
            };
            state.items.push(item);
        },
        removeitem: (state, action) =>{
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateitem: (state,action) => {
            const {id, newText} = action.payload;
            state.items = state.items.map((item) => item.id == id ? {...item, text: newText} : item);
        },
    },
});

export const { additem, removeitem, updateitem } = itemSlice.actions;

export default itemSlice.reducer;