"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

console.log("first");

export const SessionWrapper = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
