import Image from "next/image";
import { ReactNode } from "react";
import AuthLayoutSvg from "../../../../public/svg/user.svg";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen max-w-screen overflow-hidden max-lg:bg-primary">
      <div className="flex flex-1 bg-primary justify-center max-lg:hidden">
        <Image
          className="h-full w-[90%]"
          src={AuthLayoutSvg}
          alt="auth-layout"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="flex-1 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};
