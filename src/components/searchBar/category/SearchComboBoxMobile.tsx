"use client";
import { SearchComboWrapperTypes } from "@/types/searchBarTypes";
import { FC } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";

export const SearchComboBoxMobile: FC<SearchComboWrapperTypes> = ({
  open,
  setOpen,
  triggerBtn,
  children,
  mbTitle,
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerBtn}</DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <DrawerHeader>
            <DrawerTitle>{mbTitle}</DrawerTitle>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
