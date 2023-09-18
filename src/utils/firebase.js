// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5fLbT-OH8mbpWaXyQryWVAM1iJjn50M4",
  authDomain: "netflixgpt-c221d.firebaseapp.com",
  projectId: "netflixgpt-c221d",
  storageBucket: "netflixgpt-c221d.appspot.com",
  messagingSenderId: "41035799831",
  appId: "1:41035799831:web:aed82bdbeb95f979d5eb52",
  measurementId: "G-V40ETSM5D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();