/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Home from '@/app/(root)/home/page'
import { SignOut } from '@/components/sign-out'
import { SignIn } from '@/components/sign-in'
import { auth } from '@/lib/auth'

export default async function NavBar() {
  const session = await auth();
  return (
    <header className='flex justify-between items-center bg-gray-100 p-4'>
      <div >
        {!session ? <SignIn /> : <SignOut />}
      </div>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6 md:ml-6">
        <p className="text-gray-600">Signed in as:</p>
        {session && <p className="font-medium">{session.user?.email}</p>}
      </div>
    </header>

  )
}
