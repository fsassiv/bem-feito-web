import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { defaultLocale, locales } from "./i18n";

// const publicPages: string[] = [
//   "/",
//   "/app",
//   "/app/home",
//   "/auth",
//   "/auth/signin",
//   "/auth/signup",
//   "/auth/recover-password",
// ];

const protectedRoutes = ["/app/profile"];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
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
  },
);

export default function middleware(req: NextRequest) {
  // const publicPathnameRegex = RegExp(
  //   `^(/(${locales.join("|")}))?(${publicPages
  //     .flatMap((p) => (p === "/" ? ["", "/"] : p))
  //     .join("|")})/?$`,
  //   "i"
  // );

  // const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  // if (isPublicPage) {
  //   return intlMiddleware(req);
  // } else {
  //   return (authMiddleware as any)(req);
  // }

  const isProtectedRoute = protectedRoutes.some((prefix) =>
    req.nextUrl.pathname.startsWith(prefix),
  );

  if (!isProtectedRoute) {
    return intlMiddleware(req);
  }
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
