import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDE4HOgwJljDdX04mwc3gccRS_KIo9p6Q",
  authDomain: "react-auth-ab499.firebaseapp.com",
  projectId: "react-auth-ab499",
  storageBucket: "react-auth-ab499.appspot.com",
  messagingSenderId: "21214853153",
  appId: "1:21214853153:web:df8acf58f52fdf91770b60",
  measurementId: "G-7FP0XTDGZ5"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app, auth};