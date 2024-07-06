import { AuthLayout } from "@/components/layout/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bem feito App",
  description: "Sign up, Sign in and password recovery",
};

export default async function AuthRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
