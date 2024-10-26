"use client";

import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "@/config/firebase"; // Adjust the path if necessary
import { useRouter } from "next/navigation";

export function SignOutButtonLogo() {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <button
      className="m-3 hover:scale-110 duration-500 transition-all"
      onClick={handleSignOut}
    >
      <LogoutIcon className="text-white" />
    </button>
  );
}

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
