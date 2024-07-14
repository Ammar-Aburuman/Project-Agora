import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./pages/Buyer/Features/AddItemSlice";

export const store = configureStore({
    reducer: todoReducer
})