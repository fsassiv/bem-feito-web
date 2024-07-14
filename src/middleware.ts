import { NextRequest } from "next/server";
import { authMiddleware, isProtectedRoute } from "./middlewares/auth";
import { intlMiddleware } from "./middlewares/next-intl";

export default function middleware(req: NextRequest) {
  if (!isProtectedRoute(req)) {
    return intlMiddleware(req);
  }
  return (authMiddleware(intlMiddleware) as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
