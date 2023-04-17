import React, { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const authincation = createContext(null)
const AuthProvider = ({children}) => {
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
    const authInfo = {
        signUpwithEmaiPass,
        signUpWithGoogle,
        logInWithEmailPassword,
        logOut
    }

    return (
        <authincation.Provider value={authInfo}>
            {children}
        </authincation.Provider>
    );
};

export default AuthProvider;