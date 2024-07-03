import { ReactNode } from "react";
import { Header } from "../header";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
};
