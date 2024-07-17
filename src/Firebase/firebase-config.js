import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0H0XTwGoOC4hn715r3VFEjKSCNPuD9Rw",
  authDomain: "sample-project-a5a76.firebaseapp.com",
  projectId: "sample-project-a5a76",
  storageBucket: "sample-project-a5a76.appspot.com",
  messagingSenderId: "801323490696",
  appId: "1:801323490696:web:2248b963fdc8b2c4882e3d",
  measurementId: "G-B9H1Z6S8GF"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;