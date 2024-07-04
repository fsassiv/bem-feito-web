import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const NEXT_AUTH_OPTIONS: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "001", name: "_teste", password: "teste@123" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },
};
