"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type LoadingContextTypes = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextTypes>({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingWrapper = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
