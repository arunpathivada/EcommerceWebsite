// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmnFSYtPkk92oBrbGY8fj4ty_OSECGKlU",
  authDomain: "ecommerce-3e04c.firebaseapp.com",
  projectId: "ecommerce-3e04c",
  storageBucket: "ecommerce-3e04c.appspot.com",
  messagingSenderId: "1037710369043",
  appId: "1:1037710369043:web:5f64fb96d79be31034bae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;