import { configureStore } from "@reduxjs/toolkit";
import ListingsReducer from "../pages/Buyer/features/ListingsSlice";

export const store = configureStore({
    reducer: {
        listings: ListingsReducer
    }
})