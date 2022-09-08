import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //unsubscribes when it returns, so we return unsubscribe so that it does when
        //the component unMounts
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;
    }, [])



    function signup(email, password)
    {
        //this will return a promise
       return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password)
    {
        return auth.signInWithEmailAndPassword(email, password);
    }


    function logout(){
        return auth.signOut();
    }

    function resetPassword(email) {
        auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email)
    {
        return currentUser.updateEmail(email);

    }

    function updatePassword(password)
    {
        return currentUser.updatePassword(password);

    }

const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
 }
 
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

