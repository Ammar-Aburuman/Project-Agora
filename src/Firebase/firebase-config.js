import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyB-4GKp-NhkKZHVeSITFJWMlbl5XedNeBA",

  authDomain: "listing-website-82fe4.firebaseapp.com",

  projectId: "listing-website-82fe4",

  storageBucket: "listing-website-82fe4.appspot.com",

  messagingSenderId: "752230531869",

  appId: "1:752230531869:web:c473e072ea7db9a0cc97f4"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;