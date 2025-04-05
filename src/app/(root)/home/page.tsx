/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation';


export default async function page() {
     const session = await auth();
  return (
     <>
     <h3>Home</h3>
     {/* {!session ? redirect("/rezervacija") : null} */}
     </>
  );
}
