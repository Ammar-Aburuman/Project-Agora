import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const nameSlice = createSlice({
    name: "name",
    initialState,

    reducers: {
        login_user: (state,action) => {
            return action.payload;
        }
    }
})

export const {login_user} = nameSlice.actions

export default nameSlice.reducer