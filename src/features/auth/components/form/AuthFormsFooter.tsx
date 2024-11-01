import { AuthFormsFooterTypes } from "@/types/AuthFormsFooterTypes";
import { FC } from "react";
import { Button } from "../../../../components/ui/button";
import { CardFooter } from "../../../../components/ui/card";

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
