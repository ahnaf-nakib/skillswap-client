// src/contexts/AuthProvider.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    updateProfile 
} from 'firebase/auth';
import auth from '../firebase/firebase.config'; // আমাদের কনফিগ ফাইল

// ১. Context তৈরি করা
export const AuthContext = createContext(null);

// Google Provider
const googleProvider = new GoogleAuthProvider();

// ২. AuthProvider কম্পোনেন্ট (মূল অংশ)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // লোডিং অবস্থা ট্র্যাক করার জন্য

    // নতুন ইউজার তৈরি (Signup) [cite: 103]
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // ইউজার লগইন (Login) [cite: 87]
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google সাইন-ইন [cite: 99, 117]
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // ইউজার লগআউট [cite: 28]
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // প্রোফাইল আপডটে (Challenge) [cite: 134]
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
        });
    }

    // ব্যবহারকারীর অবস্থা পর্যবেক্ষণ (খুবই জরুরি)
    // এই ফাংশনটি ব্যবহারকারীর লগইন অবস্থা চেক করে, পেইজ রিলোড দিলেও লগইন ধরে রাখে
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('Current user:', currentUser);
            setLoading(false); // লোডিং শেষ
        });

        // ক্লিনআপ ফাংশন: কম্পোনেন্ট আনমাউন্ট হলে এটি বন্ধ হয়ে যাবে
        return () => {
            return unsubscribe();
        }
    }, []);


    // সব ভ্যালু যা আমরা অন্য কম্পোনেন্ট থেকে অ্যাক্সেস করতে চাই
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

// ৩. কাস্টম হুক (সহজে ব্যবহারের জন্য)
// এখন যেকোনো কম্পোনেন্ট থেকে useAuth() কল করলেই আমরা authInfo অবজেক্টটি পেয়ে যাবো
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;