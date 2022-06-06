import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAv4zK8RwIdGyyP4-uqYHQpOBWZxAdYIto",
  authDomain: "fir-auth-484e6.firebaseapp.com",
  projectId: "fir-auth-484e6",
  storageBucket: "fir-auth-484e6.appspot.com",
  messagingSenderId: "67009462625",
  appId: "1:67009462625:web:3fb2b4035808f62a2d8520",
  measurementId: "G-NGSX4R8S9K"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth()