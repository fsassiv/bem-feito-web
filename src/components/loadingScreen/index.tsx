"use client";
import { useLoadingContext } from "@/context/loading";

export const LoadingScreen = () => {
  const { isLoading } = useLoadingContext();

  if (isLoading)
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center ">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-white pointer-events-none"
          style={{ opacity: 0.5 }}
        ></div>
        <div className="z-50 flex items-end animate-pulse">
          <p className="text-primary ml-2 text-[20px]">Loading...</p>
        </div>
      </div>
    );
  return null;
};
