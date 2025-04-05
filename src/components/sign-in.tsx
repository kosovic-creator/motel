/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import router from "next/router";

const SignIn = () => {
  const handleSignIn = async () => {
    await signIn();
  };

  return (
    <div >
      <Button variant="link" onClick={async () => {
       redirect("/sign-in");;

        alert("You are signed in!");
        // You can add additional logic here if needed
        // For example, you might want to show a success message or log the user in
        //
        // window.('/not-authorized');
      }}>
        Sign In
      </Button>

    </div>
  );
};

export { SignIn };
