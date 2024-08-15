"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SignOutButton() {
  return (
    <Button onClick={() => signOut()}>
      <LogoutIcon className="text-white" />
    </Button>
  );
}
