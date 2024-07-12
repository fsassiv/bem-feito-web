"use client";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const SideBar = dynamic(() => import("./SideBar").then((mod) => mod.SideBar));
const MobileNavBar = dynamic(() =>
  import("@/components/layout/app/navBar/mobileNavBar").then(
    (mod) => mod.MobileNavBar
  )
);

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col max-lg:min-h-screen h-screen max-w-screen lg:overflow-hidden">
      <Header />
      <main className="flex max-lg:flex-col flex-1 h-screen max-h-screen overflow-y-auto lg:flex-wrap">
        <SideBar />
        {children}
        <Footer />
      </main>
      <MobileNavBar />
    </div>
  );
};
