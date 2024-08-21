"use client";

import { Card } from "@mui/material";
import GoogleSignInButton from "../../app/components/GoogleSignInButton";

const SignInForm = () => {
  return (
    <Card>
      <GoogleSignInButton>Sign In With Google</GoogleSignInButton>
    </Card>
  );
};

export default SignInForm;
