import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvaider = new GoogleAuthProvider()

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  // create user
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create user with google popup 
  const googleSingin = () =>{
    return signInWithPopup(auth, googleProvaider);
  }
  // singin user
  const singinUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // save user (onAuthStateChanged)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
      console.log("observing current user", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // sing out user
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, singinUser, logOut, loader, googleSingin };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvaider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvaider;
