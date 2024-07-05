import { FC } from "react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";

type AuthFormsFooterTypes = {
  onGoBack: () => void;
  mainBtnLabel: string;
  cancelBtnLabel: string;
  isDisabledSubmit?: boolean;
};

export const AuthFormsFooter: FC<AuthFormsFooterTypes> = ({
  onGoBack,
  mainBtnLabel,
  cancelBtnLabel,
  isDisabledSubmit,
}) => {
  return (
    <CardFooter className="flex justify-between">
      <Button variant="outline" type="reset" onClick={onGoBack}>
        {cancelBtnLabel}
      </Button>
      <Button type="submit" disabled={isDisabledSubmit}>
        {mainBtnLabel}
      </Button>
    </CardFooter>
  );
};
