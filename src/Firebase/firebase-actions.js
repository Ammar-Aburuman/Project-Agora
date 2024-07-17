import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import db from "./firebase-config";

export const addListingtoFirestore = createAsyncThunk(
    "addListingtoFirestore",
    async (item) => {
        const addItemRef = await addDoc(collection(db,"Listings"),item);
        console.log("item added : " , addItemRef.id)
        const newItem = {id:addItemRef.id, item}
        return newItem
    }
)