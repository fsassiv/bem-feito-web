"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar = () => {
  const tNavBar = useTranslations("navBar");
  return (
    <nav>
      <Button variant="ghost" className="text-xs">
        <Link href="/docs" legacyBehavior passHref>
          {tNavBar("myPosts")}
        </Link>
      </Button>
    </nav>
  );
};
