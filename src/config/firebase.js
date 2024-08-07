
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDHN8ZSyjBVhbj2PHdsI8BSVtUAmTjtYEE",
  authDomain: "fir-frontend-906cf.firebaseapp.com",
  projectId: "fir-frontend-906cf",
  storageBucket: "fir-frontend-906cf.appspot.com",
  messagingSenderId: "366622178418",
  appId: "1:366622178418:web:a13d77ec13226ec22cd6eb",
  measurementId: "G-7DZJCSPMP0"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);