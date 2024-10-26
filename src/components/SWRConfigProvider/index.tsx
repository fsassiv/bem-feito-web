"use client";
import { CategoryTypes } from "@/types/miscellaneous";
import axios from "axios";
import { ReactNode } from "react";
import useSWR, { SWRConfig } from "swr";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const SWRConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        // 30min refresh interval
        refreshInterval: 5000 * 2 * 6 * 30,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export const FetchCategories = () =>
  useSWR<CategoryTypes[]>(fetcherUrls.categories);

export const FetchSearchFilters = () =>
  useSWR<string[]>(fetcherUrls.searchBarFilters);

export enum fetcherUrls {
  categories = "/api/categories",
  searchBarFilters = "/api/searchfilters",
}
