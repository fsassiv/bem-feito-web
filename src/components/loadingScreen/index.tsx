"use client";
import { useUtilsCxt } from "@/context/utils";
import { FC } from "react";
// import { LoaderCircle } from "lucide-react";

export const LoadingScreen: FC<{ show?: boolean }> = ({ show }) => {
  const { loading } = useUtilsCxt();

  if (show || loading.isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-primary pointer-events-none"
          // style={{ opacity: 0.5 }}
        ></div>
        <div className="z-50 flex items-center animate-bounce">
          {/* <LoaderCircle
            color="#00a8a8"
            className="animate-spin h-[40px] w-auto"
          /> */}
          <p className="text-white ml-2 text-[30px] animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    );
  return null;
};
