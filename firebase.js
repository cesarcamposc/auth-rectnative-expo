// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4yA2gHRyZ_u9w22xvhZ4x5nCylLvwhB4",
  authDomain: "auth-reactnative-expo1.firebaseapp.com",
  projectId: "auth-reactnative-expo1",
  storageBucket: "auth-reactnative-expo1.firebasestorage.app",
  messagingSenderId: "902124505614",
  appId: "1:902124505614:web:c0e9f79378d1edfc1e0a5f"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth;
export {auth};