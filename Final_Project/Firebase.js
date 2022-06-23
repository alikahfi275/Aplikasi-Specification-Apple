/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAms4cQULkVOEBXAlK_4b9d-lz8WCD3M38",
    authDomain: "final-project-a2d08.firebaseapp.com",
    projectId: "final-project-a2d08",
    storageBucket: "final-project-a2d08.appspot.com",
    messagingSenderId: "636627873797",
    appId: "1:636627873797:web:380361df6c03ebe56c6c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth();