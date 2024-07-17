import { createSlice } from "@reduxjs/toolkit";
import { addListingtoFirestore } from "../../../Firebase/firebase-actions";


export const listingsSlice = createSlice({
    name: "Listings",
    initialState: {
        listingsArray : []
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(addListingtoFirestore.fulfilled,(state,action) => {
            state.listingsArray.push(action.payload);
        })


    }
})

export default listingsSlice.reducer