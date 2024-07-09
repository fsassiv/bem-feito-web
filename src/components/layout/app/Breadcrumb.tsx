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
  console.log(tRoutes("results"));

  const pathname = usePathname();

  const paths: string[] = useMemo(
    () => pathname.replace("/app", "").split("/"),
    [pathname],
  );

  return (
    <Breadcrumb className="w-full pl-2 pt-2 max-lg:hidden">
      <BreadcrumbList>
        {paths.map((item, index) => (
          <BreadcrumbItem key={item}>
            {index + 1 === paths.length ? (
              <BreadcrumbPage>{tRoutes(item)}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={`/app/${item}`}>
                  {item ? tRoutes(item) : "Home"}
                </BreadcrumbLink>
                <Slash size={10} />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
