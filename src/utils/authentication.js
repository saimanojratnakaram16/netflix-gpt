import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "./firebase";


export const signUpUser = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user,{displayName:fullName});
      return null; // No error occurred, return null
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        return "Email is already in use. Please choose another email.";
      } else {
        return "An error occurred during sign-up. Please try again later.";
      }
    }
  };
  
export const signInUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return null; // No error occurred, return null
    } catch (error) {
      const errorCode = error.code;
  
      if (errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password") {
        return "Incorrect email or password. Please try again.";
      } else {
        return "An error occurred during sign-in. Please try again later.";
      }
    }
  };

