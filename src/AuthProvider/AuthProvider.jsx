import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const authincation = createContext(null)
const AuthProvider = ({children}) => {
    const [isUser,setIsUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()


    const signUpwithEmaiPass = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUpWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logInWithEmailPassword = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsuscribe = onAuthStateChanged(auth,currentUser=>{
            setIsUser(currentUser)
            setLoading(false)
        })
        return ()=>unsuscribe()
    },[])
    const authInfo = {
        signUpwithEmaiPass,
        signUpWithGoogle,
        logInWithEmailPassword,
        logOut,
        isUser,
        loading
    }

    return (
        <authincation.Provider value={authInfo}>
            {children}
        </authincation.Provider>
    );
};

export default AuthProvider;