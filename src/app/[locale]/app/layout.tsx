import { AppLayout } from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`flex min-h-screen w-full max-w-full flex-col`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
