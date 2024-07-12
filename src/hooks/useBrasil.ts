"use client";
import brasilData from "@/lib/brasil.json";
import { getUserLocation } from "@/lib/utils";
import { CurrentLocationTypes, StatesTypes } from "@/types/miscellaneous";
import { useCallback, useEffect, useMemo, useState } from "react";

type useBrasilDataTypes = {
  citiesByState: string[];
  currentLocation: CurrentLocationTypes;
  states: StatesTypes[];
};

export const useBrasilData = (
  selectedState: string | null = "BA"
): useBrasilDataTypes => {
  const states: StatesTypes[] = useMemo(
    () => brasilData.estados.map((item) => item),
    []
  );
  const citiesByState: string[] = useMemo(
    () => states.filter((item) => item.sigla === selectedState)[0]?.cidades,
    [states, selectedState]
  );

  const [geolocation, setGeolocation] = useState<Geolocation>();
  const [lang, setLang] = useState("pt-BR");
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocationTypes>(null);

  const addStateAcronym = useCallback(
    (city: string) => {
      const state = states.find((item) => item.cidades.includes(city));

      return state?.sigla || "";
    },
    [states]
  );

  const onSuccess: PositionCallback = useCallback(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      let response = await getUserLocation(latitude, longitude, lang);
      response = { ...response, sigla: addStateAcronym(response?.city || "") };
      setCurrentLocation(response);
    },
    [lang, addStateAcronym]
  );

  useEffect(() => {
    if (geolocation) {
      geolocation.getCurrentPosition(onSuccess);
    }
  }, [geolocation, onSuccess]);

  useEffect(() => {
    if (navigator) {
      setLang(navigator.language);
      setGeolocation(navigator.geolocation);
    }
  }, []);

  return { citiesByState, currentLocation, states };
};
