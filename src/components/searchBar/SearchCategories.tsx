import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FC } from "react";
import { SearchCategoriesTypes } from "./types";

export const SearchCategories: FC<SearchCategoriesTypes> = ({
  setOpen,
  setSelectedCategory,
  categories,
  notFoundText,
  filterText,
  allCategoriesText,
}) => {
  return (
    <Command>
      <CommandInput placeholder={filterText} />
      <CommandList>
        <CommandEmpty>{notFoundText}</CommandEmpty>
        <CommandGroup>
          <CommandItem
            className="font-bold"
            value={allCategoriesText}
            onSelect={() => {
              setSelectedCategory(null);
              setOpen(false);
            }}
          >
            {allCategoriesText}
          </CommandItem>
          {categories?.map((category) => (
            <CommandItem
              key={category.value}
              value={category.value}
              onSelect={(value) => {
                setSelectedCategory(
                  categories.find((priority) => priority.value === value) ||
                    null,
                );
                setOpen(false);
              }}
            >
              {category.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
