"use client";
import { formatCurrency } from "@/lib/utils";
import { useParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type LoadingTypes = {
  isLoading: boolean;
  setLoadingOn: () => void;
  setLoadingOff: () => void;
};

type CurrencyTypes = {
  getLocaleCurrency: (value: number) => { raw: string; prefixed: string };
};

type UtilsCxtTypes = {
  loading: LoadingTypes;
  currency: CurrencyTypes;
};

const UtilsCxt = createContext<UtilsCxtTypes>({
  loading: {
    isLoading: false,
    setLoadingOn: () => {},
    setLoadingOff: () => {},
  },
  currency: {
    getLocaleCurrency: (value) => ({ raw: "", prefixed: "" }),
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

  // currency
  const getLocaleCurrency = useCallback(
    (value: number) => {
      if (typeof locale === "string") {
        const temp = formatCurrency(value, locale);
        return temp;
      }
      return { raw: "", prefixed: "" };
    },
    [locale],
  );

  const currency = {
    getLocaleCurrency,
  };

  return (
    <UtilsCxt.Provider value={{ loading, currency }}>
      {children}
    </UtilsCxt.Provider>
  );
};
