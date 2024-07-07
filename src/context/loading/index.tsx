"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type LoadingContextTypes = {
  isLoading: boolean;
  setLoadingOn: () => void;
  setLoadingOff: () => void;
};

const LoadingContext = createContext<LoadingContextTypes>({
  isLoading: false,
  setLoadingOn: () => {},
  setLoadingOff: () => {},
});

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingWrapper = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoadingOn = () => {
    setIsLoading(true);
  };

  const setLoadingOff = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoadingOn, setLoadingOff }}>
      {children}
    </LoadingContext.Provider>
  );
};
