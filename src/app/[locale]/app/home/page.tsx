"use client";
import { AppPage } from "@/components/layout/app/Page";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();

  const category = params.get("category");
  const search = params.get("search");

  return (
    <AppPage>
      AppHome {category} and {search}
    </AppPage>
  );
}
