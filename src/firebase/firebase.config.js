// src/firebase/firebase.config.js (The Correct Code)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// .env ফাইল থেকে ভ্যারিয়েবলগুলো এখানে ইম্পোর্ট করা হচ্ছে
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// Firebase অ্যাপ ইনিশিয়ালাইজ করা
const app = initializeApp(firebaseConfig);

// Authentication সার্ভিস এক্সপোর্ট করা
const auth = getAuth(app);
export default auth;