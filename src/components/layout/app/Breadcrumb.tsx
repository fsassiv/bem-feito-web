"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const AppBreadcrumb = () => {
  const tRoutes = useTranslations("pages.routes");

  const pathname = usePathname();

  const paths: string[] = useMemo(
    () => pathname.replace("/app", "").split("/"),
    [pathname],
  );

  if (pathname === "/app") return null;
  return (
    <Breadcrumb className="w-full pl-2 pt-2 max-lg:hidden">
      <BreadcrumbList>
        {paths.map((item, index) => {
          const isCurrentPage = index + 1 === paths.length;
          const label = item ? tRoutes(item) : "";
          return (
            <BreadcrumbItem key={item}>
              {isCurrentPage ? (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={`/app/${item}`}>
                    {item ? label : "Home"}
                  </BreadcrumbLink>
                  <Slash size={10} />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
