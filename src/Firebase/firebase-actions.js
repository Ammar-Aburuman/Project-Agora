import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "./firebase-config";

export const addListingtoFirestore = createAsyncThunk(
    "addListingtoFirestore",
    async (item) => {
        const addItemRef = await addDoc(collection(db,"Listings"),item);
        console.log("item added : " , addItemRef.id)
        const newItem = {id:addItemRef.id, item}
        return newItem
    }
);

export const fetchItems = createAsyncThunk(
    "fetchItems",
    async () => {
        const querySnapshot = await getDocs(collection(db,"Listings"))
        const items = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            item: doc.data(),
        }));
        return items;
    }
)