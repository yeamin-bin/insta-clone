
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Ao_3P8V7OFfqduanbvUyNpS4Z6gZ1V4",
  authDomain: "insta-clone-next-bab30.firebaseapp.com",
  projectId: "insta-clone-next-bab30",
  storageBucket: "insta-clone-next-bab30.appspot.com",
  messagingSenderId: "1071140353847",
  appId: "1:1071140353847:web:6c50138cbe3d25dccf8cb2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

