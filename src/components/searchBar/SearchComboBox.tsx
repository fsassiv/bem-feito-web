"use client";

import { FC, useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { SearchCategories } from "./SearchCategories";
import { SearchComboBoxDesktop } from "./SearchComboBoxDesktop";
import { SearchComboBoxMobile } from "./SearchComboBoxMobile";
import { Category, SearchComboBoxTypes } from "./types";

export const SearchComboBox: FC<SearchComboBoxTypes> = ({
  updateSelectedCategory,
  categories,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const tForm = useTranslations("forms");

  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const TriggerButton = (
    <Button
      variant="default"
      className="w-full lg:w-[200px]  max-lg:mb-1 justify-start lg:rounded-r-none"
    >
      {selectedCategory ? (
        <>{selectedCategory.label}</>
      ) : (
        <>{tForm("searchBar.selectCategory")}</>
      )}
    </Button>
  );

  const SeartchCategoriesComp = () => (
    <SearchCategories
      setOpen={setOpen}
      setSelectedCategory={setSelectedCategory}
      categories={categories}
      notFoundText={tForm("general.notFound")}
      filterText={tForm("searchBar.filterCat")}
      allCategoriesText={tForm("searchBar.allCategories")}
    />
  );

  useEffect(() => {
    updateSelectedCategory(selectedCategory);
  }, [selectedCategory, updateSelectedCategory]);

  if (isDesktop) {
    return (
      <SearchComboBoxDesktop
        open={open}
        setOpen={setOpen}
        selectedCategory={selectedCategory}
        triggerBtn={TriggerButton}
      >
        <SeartchCategoriesComp />
      </SearchComboBoxDesktop>
    );
  }

  return (
    <SearchComboBoxMobile
      open={open}
      setOpen={setOpen}
      selectedCategory={selectedCategory}
      triggerBtn={TriggerButton}
      mbTitle={tForm("searchBar.selectCategory")}
    >
      <SeartchCategoriesComp />
    </SearchComboBoxMobile>
  );
};
