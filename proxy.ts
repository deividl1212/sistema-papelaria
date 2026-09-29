import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const logado = !!req.auth;
  const naTelaDeLogin = req.nextUrl.pathname.startsWith("/login");

  if (!logado && !naTelaDeLogin) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (logado && naTelaDeLogin) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|json|xml|txt|css|js|map|woff|woff2)$).*)",
  ],
};