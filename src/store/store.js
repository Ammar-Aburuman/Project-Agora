import { configureStore } from "@reduxjs/toolkit";
import ListingsReducer from "../pages/Buyer/features/ListingsSlice";
import nameReducer from "../pages/Login/features/nameSlice";

export const store = configureStore({
    reducer: {
        listings: ListingsReducer,
        name: nameReducer
    }
})