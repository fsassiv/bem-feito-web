"use client";
import CurrencyInput, {
  CurrencyInputOnChangeValues,
} from "react-currency-input-field";

interface AppCurrencyInputPropTypes {
  onValueChange: (
    _value: string | undefined,
    _name: string | undefined,
    values: CurrencyInputOnChangeValues | undefined,
  ) => void;
}

export const AppCurrencyInput = ({
  onValueChange,
  ...rest
}: AppCurrencyInputPropTypes) => {
  return (
    <CurrencyInput
      defaultValue={0}
      decimalsLimit={2}
      decimalSeparator=","
      groupSeparator="."
      prefix="R$ "
      onValueChange={onValueChange}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      {...rest}
    />
  );
};
