// Import the functions you need from the SDKs you need
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoDsVLYAiEWzbW8_K2-YjbEuYehyuk-So",
  authDomain: "reactapplication-99e6f.firebaseapp.com",
  projectId: "reactapplication-99e6f",
  storageBucket: "reactapplication-99e6f.appspot.com",
  messagingSenderId: "422736655324",
  appId: "1:422736655324:web:68e099cd395e0ddb1f1519",
  measurementId: "G-8ESWR4SJFM"
};

// Initialize Firebase

let app : FirebaseApp
if(getApps().length === 0)
    app = initializeApp(firebaseConfig);
else
    app = getApps()[0];
const Auth = getAuth(app);
const analytics = getAnalytics(app);
export {app, Auth};