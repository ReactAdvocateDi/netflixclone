import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'



export const AuthContext = createContext();

export const UserAuth = () => {
  const [user, setUser] = useState(null);

  async function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', email), {
      savedShows: []
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { signUp, logIn, logOut, user };
};

export function AuthContextProvider({ children }) {
  const userAuth = UserAuth();

  return (
    <AuthContext.Provider value={userAuth}>
      {children}
    </AuthContext.Provider>
  );
}
