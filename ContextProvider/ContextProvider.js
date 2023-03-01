import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firbase.config';

export const DuberContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // user register 

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    // user login 

    const userLogout = () => {
        return signOut(auth)
    };
    // user logout 

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            photoURL: '',
            displayName: name
        })
    };
    // update user 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    const value = { user, userRegister, userLogin, updateUser, userLogout }
    return (
        <DuberContext.Provider value={value}>
            {children}
        </DuberContext.Provider>
    );
};

export default ContextProvider;