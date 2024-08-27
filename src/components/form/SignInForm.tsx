"use client";

import { Card } from "@mui/material";
import GoogleSignInButton from "../../app/components/GoogleSignInButton";

const SignInForm = () => {
  return (
    <div className="">
      <Card>
        <GoogleSignInButton>Sign In With Google</GoogleSignInButton>
      </Card>
    </div>
  );
};

export default SignInForm;
