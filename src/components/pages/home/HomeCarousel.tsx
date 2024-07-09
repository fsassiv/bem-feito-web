"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

const mockItems: string[] = Array.from({ length: 3 });

export const HomeCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api, setSelectedIndex]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
  }, [api, onSelect]);

  return (
    <div className="lg:container pt-6 px-2 mb-2 w-full">
      <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {mockItems.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-primary border-0 shadow-none">
                  <CardContent className="flex items-center justify-center p-6 h-[65vh]">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ul className="max-lg:hidden flex justify-center">
        {mockItems.map((item: string, index) => (
          <li key={index} className="flex m-3 cursor-pointer">
            <span
              onClick={() => scrollTo(index)}
              className={clsx(
                selectedIndex === index && "bg-gray-800",
                "h-2 w-8 bg-gray-500 rounded opacity-50",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
