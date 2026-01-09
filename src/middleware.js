import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only redirect the root path to /news to avoid redirect loops
  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL('/news', request.url));
  }

  return NextResponse.next();
}
