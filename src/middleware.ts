import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*', //  Or '/((?!api|_next/static|_next/image|favicon.ico).*)'
}

/* Currently the Middleware is not "active", it is just here as an example in case it is needed in the future*/