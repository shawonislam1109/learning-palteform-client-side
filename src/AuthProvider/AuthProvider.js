import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';


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
    const ProfileInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }
    const emailVerify = () => {
        setLoader(true)
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            else {
                toast.error('your email is not verified')
            }
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
        loader,
        ProfileInfo,
        setLoader,
        emailVerify,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;