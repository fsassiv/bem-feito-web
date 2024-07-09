"use client";
import { Navbar } from "@/components/layout/app/navBar";
import { appColors } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { AppDropdownMenu } from "../../appDropdownMenu";
import { SearchBar } from "../../searchBar";
import { Button } from "../../ui/button";
import { AppBreadcrumb } from "./Breadcrumb";

export const Header = () => {
  const tNavBar = useTranslations("navBar");

  return (
    <header className="w-full">
      <div className=" flex justify-between p-2 items-start border-b">
        <Link href="/app" className="max-lg:hidden w-[20%]">
          <Button variant="ghost" className="lg:mr-1">
            <BadgeCheck color={appColors.primary} />
            <span className="inline-block ml-2 text-primary">
              {tNavBar("homeBtnTitle")}
            </span>
          </Button>
        </Link>
        <div className="flex flex-1 justify-center">
          <SearchBar />
          <Navbar />
        </div>
        <AppDropdownMenu />
      </div>
      <AppBreadcrumb />
    </header>
  );
};
