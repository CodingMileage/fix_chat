"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

export function SignOutButtonLogo() {
  return (
    <Button onClick={() => signOut()}>
      <LogoutIcon className="text-white" />
    </Button>
  );
}

export function SignOutButton() {
  return <Button onClick={() => signOut()}></Button>;
}
