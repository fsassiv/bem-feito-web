import { CategoryTypes } from "@/lib/types";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type SearchComboWrapperTypes = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selectedCategory: CategoryTypes | null;
  children: ReactNode;
  triggerBtn: ReactNode;
  mbTitle?: string;
};

export type SearchCategoriesTypes = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: CategoryTypes[] | undefined;
  setSelectedCategory: Dispatch<SetStateAction<CategoryTypes | null>>;
  notFoundText: string;
  filterText: string;
  allCategoriesText: string;
};

export type SearchComboBoxTypes = {
  updateSelectedCategory: (category: CategoryTypes | null) => void;
  categories: CategoryTypes[] | undefined;
};
