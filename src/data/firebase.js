// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAmOBz1yLrFNXM7lrJy3TKGa8Inu1Pi5gE",
  authDomain: "messenger-41912.firebaseapp.com",
  projectId: "messenger-41912",
  storageBucket: "messenger-41912.appspot.com",
  messagingSenderId: "408428309629",
  appId: "1:408428309629:web:40a0e6d504eca71b635514",
  measurementId: "G-WYY9C76HJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

export default db;
