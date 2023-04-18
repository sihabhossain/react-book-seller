// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjpbGIKitDkVZP2AQ0WFJk3aeLPFu3VJQ",
    authDomain: "self-auth-practice-1fac0.firebaseapp.com",
    projectId: "self-auth-practice-1fac0",
    storageBucket: "self-auth-practice-1fac0.appspot.com",
    messagingSenderId: "107723592534",
    appId: "1:107723592534:web:31e04dc3a9649ffb78fcf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;