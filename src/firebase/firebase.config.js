// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcWMoghIlfv8msXa9j1F-LBQVM9qaO4EY",
  authDomain: "ema-jhon-with-authintication.firebaseapp.com",
  projectId: "ema-jhon-with-authintication",
  storageBucket: "ema-jhon-with-authintication.appspot.com",
  messagingSenderId: "356810003962",
  appId: "1:356810003962:web:5dfff29043c48dea394043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app