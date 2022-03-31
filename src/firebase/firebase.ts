// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8_Ea2_iDNJZI9gjxcaLrmWBHCnsy-QE8",
  authDomain: "portfolio-e45ed.firebaseapp.com",
  projectId: "portfolio-e45ed",
  storageBucket: "portfolio-e45ed.appspot.com",
  messagingSenderId: "10007708856",
  appId: "1:10007708856:web:16dd2bc3940e147180604d",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

