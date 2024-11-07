"use client";

import { useEffect, useState } from "react";
import { auth } from "@/config/firebase"; // Import your auth config
import { User } from "firebase/auth"; // Import User type from Firebase Auth
import ChatComponent from "../../../../components/ChatComp";
import { Container, CircularProgress } from "@mui/material";

export default function AiUtility() {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // User type or null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // user is of type User or null
      setIsLoading(false); // Set loading to false once auth state is determined
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <Container className="flex justify-center mt-40">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      {currentUser ? (
        <ChatComponent />
      ) : (
        <Container className="mt-40 text-2xl font-bold">Please login</Container>
      )}
    </>
  );
}
