// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEc9jNAecs9rN4wZEpU-1-nFdVVlMJsAc",
  authDomain: "192.168.6.88:3000",
  projectId: "geek-pad",
  storageBucket: "geek-pad.appspot.com",
  messagingSenderId: "933940019698",
  appId: "1:933940019698:web:6c4e329cd97640fb87ab6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
