// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseAPIKey } from "./env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseAPIKey,
  authDomain: "bank-app-b6a7e.firebaseapp.com",
  projectId: "bank-app-b6a7e",
  storageBucket: "bank-app-b6a7e.appspot.com",
  messagingSenderId: "818458394377",
  appId: "1:818458394377:web:cb742f8b0cbaf30da21dd8",
  measurementId: "G-J7RCPH4077",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
