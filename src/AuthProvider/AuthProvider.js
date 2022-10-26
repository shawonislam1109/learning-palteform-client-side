import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config'
import { useEffect } from 'react';


const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    console.log(user)


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = (provider) => {
        setLoader(loader);
        return signInWithPopup(auth, provider);
    }

    const GithubSignIn = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        GoogleSignIn,
        logOut,
        GithubSignIn,
        createUser,
        SignUser,
        loader
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;