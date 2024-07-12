import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/posts"];

export const isProtectedRoute = (req: NextRequest) =>
  protectedRoutes.some((prefix) => req.nextUrl.pathname.includes(prefix));

export const authMiddleware = (
  intlMiddleware: (request: NextRequest) => NextResponse<unknown>
) =>
  withAuth(
    function onSuccess(req) {
      return intlMiddleware(req);
    },
    {
      callbacks: {
        authorized: ({ token }) => token != null,
      },
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: "/auth/signin",
      },
    }
  );
