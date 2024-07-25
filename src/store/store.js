import { configureStore } from "@reduxjs/toolkit";
import ListingsReducer from "../pages/Buyer/features/ListingsSlice";
import nameReducer from "../pages/Login/features/nameSlice";
import cartReducer from "../pages/Buyer/features/CartSlice";

export const store = configureStore({
    reducer: {
        listings: ListingsReducer,
        name: nameReducer,
        cart: cartReducer
    }
})