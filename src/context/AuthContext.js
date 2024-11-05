"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, googleProvider } from "../config/firebase"; // Adjust this path if needed
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

// AuthProvider component to provide authentication state and methods to the rest of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Monitor authentication state changes and set the user accordingly
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Set loading to false once the auth state is known
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Sign in with Google and handle potential errors
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setError(null);
    } catch (err) {
      console.error("Google sign-in error:", err);
      setError("Failed to sign in. Please try again.");
    }
  };

  // Sign out and handle potential errors
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setError(null);
    } catch (err) {
      console.error("Sign-out error:", err);
      setError("Failed to sign out. Please try again.");
    }
  };

  // Provide user, loading, signInGoogle, handleSignOut, and error states through context
  return (
    <AuthContext.Provider value={{ user, loading, signInGoogle, handleSignOut, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext, ensuring that it’s always used within the provider
export const useAuth = () => useContext(AuthContext);
