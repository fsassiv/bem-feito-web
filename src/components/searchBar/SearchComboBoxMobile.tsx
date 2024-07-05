"use client";
import { FC } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { SearchComboWrapperTypes } from "./types";

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
