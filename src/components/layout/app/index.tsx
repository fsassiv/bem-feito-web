import { ReactNode } from "react";
import { MBBottomMenu } from "../../mbBottomMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen max-w-screen overflow-hidden">
      <Header />
      <main className="flex-1 flex h-screen max-h-screen overflow-y-auto lg:flex-wrap">
        <SideBar />
        {children}
        <Footer />
      </main>
      <MBBottomMenu />
    </div>
  );
};
