import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config'
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const githubprovider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            
        })
        
    }



    const signIn = (email, password) => {
        setLoading(true)
        setReload(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const signinWithGoogle = () => {
        setReload(true)
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


   


    // github login
    const signinWithGithub = () => {
        setLoading(true)
        setReload(true)
        return signInWithPopup(auth, githubprovider)
    }

    const logOut = () => {

        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                console.log(currentUser)
                setLoading(false)
                setUser(currentUser)
            }else{
                setUser(currentUser)
                setLoading(false)
            }
        });
        return () => {
            unSubscribe();
        
        }}
        , [reload])


    const AuthInfo = {
        createUser,
        user,
        signIn,
        signinWithGoogle,
        signinWithGithub,
        logOut,
        loading,
        setReload,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
};

export default AuthProvider;