"use client";

import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import ChatComponent from "../../../../components/ChatComp";
import Typography from "@mui/material/Typography";
import { Container, CircularProgress } from "@mui/material";

export default function aiUtility() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false); // Set loading to false once the auth state is determined
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
