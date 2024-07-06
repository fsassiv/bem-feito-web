import { AppLayout } from "@/components/layout/app";
import { LoadingScreen } from "@/components/loadingScreen";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppLayout>{children}</AppLayout>
      <LoadingScreen />
    </>
  );
}
