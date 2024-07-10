"use client";
import { AppTooltip } from "@/components/tooltip/AppTooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ResultsItemPropTypes } from "@/types/results";
import { Scale, Star } from "lucide-react";
import { FC } from "react";

export const Item: FC<ResultsItemPropTypes> = () => {
  return (
    <li className="flex flex-col lg:flex-row p-2 rounded border border-gray-200 hover:border-gray-300  w-full xl:w-[100%] showonscroll bg-white mb-1 lg:mb-2 lg:justify-between">
      <div className="rounded min-h-[100px] flex-1 lg:pr-2">
        <Skeleton className="w-full h-full" />
      </div>
      <Separator orientation="vertical" className="max-lg:hidden bg-gray-300" />
      <div className="w-full h-full lg:w-[30%] p-2">
        <div className="flex justify-end items-center mb-2">
          <AppTooltip message="Negociar">
            <button className="clean-button p-1 mr-1">
              <Scale size={20} />
            </button>
          </AppTooltip>
          <AppTooltip message="Favoritar">
            <button className="clean-button p-1">
              <Star size={20} />
            </button>
          </AppTooltip>
        </div>
        <div className="rounded w-full min-h-[100px] mb-4">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <Button className="mb-1 text-xs rounded-full">Contratar</Button>
          <Button variant="outline" className="mb-1 text-xs rounded-full">
            Chat
          </Button>
          <Button variant="link" className="text-xs">
            Ver mais
          </Button>
        </div>
      </div>
    </li>
  );
};
