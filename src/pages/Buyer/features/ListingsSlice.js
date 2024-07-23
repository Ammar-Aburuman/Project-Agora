import { createSlice } from "@reduxjs/toolkit";
import { addListingtoFirestore , fetchItems} from "../../../Firebase/firebase-actions";


export const listingsSlice = createSlice({
    name: "Listings",
    initialState: {
        listingsArray : []
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(addListingtoFirestore.fulfilled,(state,action) => {
            state.listingsArray.push(action.payload)
        })
        .addCase(fetchItems.fulfilled,(state,action) => {
            state.listingsArray = action.payload;
        })


    }
})

export default listingsSlice.reducer