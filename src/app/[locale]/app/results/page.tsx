"use client";
import { AppPage } from "@/components/layout/app/Page";
import { Item } from "@/components/pages/results/Item";
import { ResultsSideBar } from "@/components/pages/results/ResultsSideBar";
import { useSearchParams } from "next/navigation";

export default function Results() {
  const params = useSearchParams();

  const category = params.get("category");
  const search = params.get("search");

  // throw new Error()

  return (
    <>
      <AppPage>
        {/* AppHome {category} and {search} */}
        <div className="flex flex-1 justify-center w-full py-2 lg:px-2">
          <ul className="xl:max-w-[50vw] px-2 flex flex-col lg:flex-row lg:flex-wrap gap-1 w-full mb-10 justify-between rounded p-2">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
        </div>
      </AppPage>
      <ResultsSideBar />
    </>
  );
}
