/* eslint-disable @typescript-eslint/no-unused-vars */
// import { NextResponse } from 'next/server';

// import type { NextRequest } from 'next/server'
// import { auth } from './lib/auth';


// export  async function middleware(request: NextRequest) {
//   // const session = await auth();
//   if (request.nextUrl.pathname.startsWith('/rezervacije')) {
//     return NextResponse.rewrite(new URL('/sign-in', request.url))
//   }



//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     return NextResponse.rewrite(new URL('/home', request.url))
// }
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  // Provera da li je korisnik autentifikovan
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Ako je autentifikovan, dozvoljava se pristup
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/rezervacije/:path*"], // Rute koje treba zaštititi
};



