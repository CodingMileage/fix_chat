"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

export function SignOutButtonLogo() {
  return (
    <button
      className="m-3 hover:scale-110 duration-500 transition-all"
      onClick={() => signOut()}
    >
      <LogoutIcon className="text-white" />
    </button>
  );
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}></Button>;
}
