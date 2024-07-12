export type CategoryTypes = {
  value: string;
  label: string;
};

export type StatesTypes = {
  sigla: string;
  nome: string;
  cidades: string[];
};

export type CurrentLocationTypes = {
  city?: string;
  countryCode?: string;
  countryName?: string;
  principalSubdivision?: string;
  continent?: string;
  sigla?: string;
} | null;
