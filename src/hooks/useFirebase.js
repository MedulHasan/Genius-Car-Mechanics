/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider).finally(() => setIsLoading(false))

    }

    // observr user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({})
            })
            .finally(() => setIsLoading(false))
    }

    return {
        users,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;