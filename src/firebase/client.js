import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBB97EW30blW_qK3xVsbYigtui529XCFA",
  authDomain: "store-839c8.firebaseapp.com",
  projectId: "store-839c8",
  storageBucket: "store-839c8.appspot.com",
  messagingSenderId: "615076266335",
  appId: "1:615076266335:web:da15f3c3c25742fd8976ea",
  measurementId: "G-FX56S76KQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
