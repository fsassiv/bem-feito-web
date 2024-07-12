"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchComboWrapperTypes } from "@/types/searchBarTypes";
import { FC } from "react";

export const SearchComboBoxDesktop: FC<SearchComboWrapperTypes> = ({
  triggerBtn,
  open,
  setOpen,
  children,
}) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{triggerBtn}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        {children}
      </PopoverContent>
    </Popover>
  );
};
