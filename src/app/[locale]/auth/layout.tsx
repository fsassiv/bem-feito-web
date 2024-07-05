import { AuthLayout } from "@/components/layout/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bem feito App",
  description: "Sign up, Sign in and password recovery",
};

export default async function AuthRootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    // <html lang={locale}>
    // <body
    //   className={`flex min-h-screen w-full max-w-full flex-col`}
    //   suppressHydrationWarning
    // >
    <AuthLayout>{children}</AuthLayout>
    // </body>
    // </html>
  );
}
