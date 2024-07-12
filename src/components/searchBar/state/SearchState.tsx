"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useBrasilData } from "@/hooks/useBrasil";
import {
  SearchStatePropTypes,
  SelectedStateTypes,
} from "@/types/searchBarTypes";
import { MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

export const SearchState: FC<SearchStatePropTypes> = ({ getSelectedState }) => {
  const searchParams = useSearchParams();
  const urlState: string | null = useMemo(
    () => searchParams.get("state"),

    [searchParams]
  );

  const { currentLocation, states } = useBrasilData(urlState);

  const [open, setOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<SelectedStateTypes>(null);

  const getInitialStateName = useCallback((): string | undefined => {
    if (currentLocation) {
      const { sigla } = currentLocation;
      const paramState = searchParams.get("state");

      return paramState || sigla;
    }
    return "";
  }, [currentLocation, searchParams]);

  useEffect(() => {
    const initialStataName = getInitialStateName();

    const inititalSelected = states?.find(
      (item) => item.sigla.toLowerCase() === initialStataName?.toLowerCase()
    );
    setSelectedState(inititalSelected);
  }, [states, getInitialStateName]);

  useEffect(() => {
    getSelectedState(selectedState);
  }, [selectedState, getSelectedState]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded-none">
          {selectedState?.sigla || <MapPin size={16} />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Digite o nome do estado" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                className="font-bold"
                value="all"
                onSelect={() => {
                  setSelectedState(null);
                  setOpen(false);
                }}
              >
                Todos os estados
              </CommandItem>
              {states?.map((item) => (
                <CommandItem
                  key={item.sigla}
                  value={item.nome}
                  onSelect={(value) => {
                    setSelectedState(
                      states.find((stt) => stt.nome === value) || null
                    );
                    setOpen(false);
                  }}
                >
                  <span>{item.nome}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
