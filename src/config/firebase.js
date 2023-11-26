import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA4MvwcBOUv0ob6Egk5ucim_YhRdtKDDdU",
  authDomain: "spelhemsida-18335.firebaseapp.com",
  projectId: "spelhemsida-18335",
  storageBucket: "spelhemsida-18335.appspot.com",
  messagingSenderId: "5446473742",
  appId: "1:5446473742:web:8cb16271b67b2fdc82845f",
  measurementId: "G-S6P3YB9NNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

