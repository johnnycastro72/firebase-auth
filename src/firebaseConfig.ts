import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDFUxr1hovGjAJsm7Ex_pttV4cHukk3klU",
  authDomain: "fir-auth-8c4f3.firebaseapp.com",
  projectId: "fir-auth-8c4f3",
  storageBucket: "fir-auth-8c4f3.appspot.com",
  messagingSenderId: "410550605070",
  appId: "1:410550605070:web:90e137f9fe5912566cb35f"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth()