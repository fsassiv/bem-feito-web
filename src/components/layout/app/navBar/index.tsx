"use client";
import { LanguageSelector } from "@/components/languageSelector";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../../../ui/button";

export const Navbar = () => {
  const tNavBar = useTranslations("navBar");
  return (
    <nav className="max-lg:hidden flex">
      <LanguageSelector />
      <Link href="/app/posts/my-posts" legacyBehavior passHref>
        <Button variant="ghost" className="text-xs">
          {tNavBar("myPosts")}
        </Button>
      </Link>
    </nav>
  );
};
