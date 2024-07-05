import { Dispatch, ReactNode, SetStateAction } from "react";

export type SearchComboWrapperTypes = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedCategory: Category | null;
  children: ReactNode;
  triggerBtn: ReactNode;
  mbTitle?: string;
};

export type Category = {
  value: string;
  label: string;
};

export type SearchCategoriesTypes = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
  setSelectedCategory: Dispatch<SetStateAction<Category | null>>;
  notFoundText: string;
  filterText: string;
  allCategoriesText: string;
};

export type SearchComboBoxTypes = {
  updateSelectedCategory: (category: Category | null) => void;
  categories: Category[];
};
