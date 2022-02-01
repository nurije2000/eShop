// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPxdSIlVah7BO3wJERO1o4M_2vGm6MQv8",
  authDomain: "vue-shop-2433f.firebaseapp.com",
  projectId: "vue-shop-2433f",
  storageBucket: "vue-shop-2433f.appspot.com",
  messagingSenderId: "74289661542",
  appId: "1:74289661542:web:33c494b11b47a634754fa7",
  measurementId: "G-BN75GE63K9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);