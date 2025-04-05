/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Home from '@/app/(root)/home/page'
import { SignOut } from '@/components/sign-out'
import { SignIn } from '@/components/sign-in'
import { auth } from '@/lib/auth'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@radix-ui/react-navigation-menu'


export default async function NavBar() {
  const session = await auth();
  return (
    <header className='flex justify-between items-center bg-gray-800 p-4 size-full'>
      <div >
        {!session ? <SignIn /> : <SignOut />}
      </div>
      <div className="bg-gray-800 rounded-lg p-4 text-center mb-6 md:ml-6 text-white">
        <p className="text-gray-50">Signed in as:</p>
        {session && <p className="font-medium">{session.user?.email}</p>}
      </div>

    </header>

  )
}
