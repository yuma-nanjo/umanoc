// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl9y0xT0SpINNPRC-y_LkiKmZiByjjiMk",
  authDomain: "otp-demo-3fe5f.firebaseapp.com",
  projectId: "otp-demo-3fe5f",
  storageBucket: "otp-demo-3fe5f.appspot.com",
  messagingSenderId: "173512512377",
  appId: "1:173512512377:web:1a45211af7033c6a2b95a8",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
