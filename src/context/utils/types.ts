export type LoadingTypes = {
  isLoading: boolean;
  setLoadingOn: () => void;
  setLoadingOff: () => void;
};

export type CurrencyTypes = {
  getLocaleCurrency: (value: number) => { raw: string; prefixed: string };
};

export type UtilsCxtTypes = {
  loading: LoadingTypes;
  currency: CurrencyTypes;
};
