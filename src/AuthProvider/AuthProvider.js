import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config'
import { useEffect } from 'react';


const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)


    const signInHandle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const GoogleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const GithubSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, GoogleSignIn, logOut, GithubSignIn, signInHandle }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;