/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation';
import { Home } from 'lucide-react';

export default async function page() {
     const session = await auth();
  return (
     <>
     <h2>Home</h2>
     {/* {!session ? redirect("/rezervacija") : null} */}
     </>
  );
}
