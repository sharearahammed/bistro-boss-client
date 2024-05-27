/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    // const axiosSecure = useAxiosSecure();
    const axipsPublic = useAxiosPublic();
    
    const [ user , setUser ] = useState(null);
    const [loading , setLoading] = useState(true)

    const createuser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
 

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        // const userEmail = currentUser?.email || user?.email;
        // const loggedUser = { email:userEmail};
        // setLoading(true)
            setUser(currentUser)
            console.log('current user -->',currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email}
                axipsPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                // axipsPublic.post('/logout',userInfo)
                // .then(res=>{console.log(res.data)})
                localStorage.removeItem('access-token')
                
            }
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[auth, axipsPublic, user?.email])

    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;