
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'


var config = {
  apiKey: "AIzaSyAPxdSIlVah7BO3wJERO1o4M_2vGm6MQv8",
  authDomain: "vue-shop-2433f.firebaseapp.com",
  projectId: "vue-shop-2433f",
  storageBucket: "vue-shop-2433f.appspot.com",
  messagingSenderId: "74289661542",
  appId: "1:74289661542:web:33c494b11b47a634754fa7",
  measurementId: "G-BN75GE63K9"
};

const fb = firebase.initializeApp(config);
 
const db = firebase.firestore();

export {fb,db}

