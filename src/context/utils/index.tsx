"use client";
import { useParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

type LoadingTypes = {
  isLoading: boolean;
  setLoadingOn: () => void;
  setLoadingOff: () => void;
};

type UtilsCxtTypes = {
  loading: LoadingTypes;
};

const UtilsCxt = createContext<UtilsCxtTypes>({
  loading: {
    isLoading: false,
    setLoadingOn: () => {},
    setLoadingOff: () => {},
  },
});

export const useUtilsCxt = () => useContext(UtilsCxt);

export const UtilsCxtWrapper = ({ children }: { children: ReactNode }) => {
  const { locale } = useParams();

  // loading
  const [isLoading, setIsLoading] = useState(false);

  const setLoadingOn = () => {
    setIsLoading(true);
  };

  const setLoadingOff = () => {
    setIsLoading(false);
  };

  const loading = {
    isLoading,
    setLoadingOn,
    setLoadingOff,
  };

  console.log(locale);

  return <UtilsCxt.Provider value={{ loading }}>{children}</UtilsCxt.Provider>;
};
