import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverTimestamp,addDoc, collection, getDocs } from "firebase/firestore";
import db, {storage} from "./firebase-config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


export const addListingtoFirestore = createAsyncThunk(
    'addListingtoFirestore',
    async (item) => {
        try {
            // Extract and remove image from item
            const image = item.image;
            delete item.image;

            // Image upload part
            const imageRef = ref(storage, `Listings/${v4()}`);
            await uploadBytes(imageRef, image);
            const imageUrl = await getDownloadURL(imageRef);

            // Add image URL to item
            item.imageLink = imageUrl;

            // Item part
            const addItemRef = await addDoc(collection(db, 'Listings'), {...item, createdAt:serverTimestamp()});
            console.log('Item added:', addItemRef.id);
            const newItem = { id: addItemRef.id, item };
            return newItem;
            } 
            catch (error) {
                console.error('Error adding item:', error);
                throw error;
        }
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