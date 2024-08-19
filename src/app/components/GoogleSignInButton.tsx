import { FC, ReactNode } from "react";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = async () => {
    try {
      await signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
