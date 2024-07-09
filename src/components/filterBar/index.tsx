"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { FetchSearchFilters } from "../SWRConfigProvider";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const FilterBar = () => {
  const tFilter = useTranslations("filterBar");

  const { data: searchBarfilters } = FetchSearchFilters();

  return (
    <Card className="max-h-full bg-primary">
      <CardHeader>
        <CardTitle className="text-white">{tFilter("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          className="h-auto max-h-full overflow-y-auto overflow-x-hidden mt-2"
          type="single"
          collapsible
        >
          {searchBarfilters?.map((item) => (
            <AccordionItem
              value={`${item}`}
              key={item}
              className="!border-b-0  mb-1"
            >
              <AccordionTrigger className="!no-underline w-full border rounded-md px-2 !py-2 mb-1 text-xs bg-white">
                Estado
              </AccordionTrigger>
              <AccordionContent className="border rounded-md p-2 bg-white text-xs">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" className="text-xs text-white">
          {tFilter("clearFilterBtn")}
        </Button>
        <Button
          variant="default"
          size="sm"
          className="text-xs border font-bold"
        >
          {tFilter("applyFilterBtn")}
        </Button>
      </CardFooter>
    </Card>
  );
};
