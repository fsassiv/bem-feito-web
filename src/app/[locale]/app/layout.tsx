import { AppLayout } from "@/components/layout/app";
import { LoadingScreen } from "@/components/loadingScreen";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    // <html lang={locale}>
    // <body className={`flex min-h-screen w-full max-w-full flex-col`}>
    <>
      <AppLayout>{children}</AppLayout>
      <LoadingScreen />
    </>
    // </body>
    // </html>
  );
}
