import { LoadingScreen } from "@/components/loadingScreen";
import { SWRConfigProvider } from "@/components/SWRConfigProvider";
import { Toaster } from "@/components/ui/sonner";
import { LoadingWrapper } from "@/context/loading";
import { SessionWrapper } from "@/context/session";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem feito App",
  description: "Web catalog",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <LoadingWrapper>
      <SessionWrapper>
        <html lang={locale}>
          <body
            className={`${inter.className} flex min-h-screen w-full max-w-full flex-col`}
          >
            <Toaster
              position="bottom-center"
              closeButton
              visibleToasts={1}
              toastOptions={{ classNames: { closeButton: "bg-white" } }}
            />
            <NextIntlClientProvider messages={messages}>
              <Suspense fallback={<LoadingScreen />}>
                <SWRConfigProvider>{children}</SWRConfigProvider>
              </Suspense>
            </NextIntlClientProvider>
          </body>
        </html>
      </SessionWrapper>
    </LoadingWrapper>
  );
}
