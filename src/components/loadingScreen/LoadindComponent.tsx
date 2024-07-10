import { appColors } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

export const LoadingComponent = () => {
  return (
    <LoaderCircle
      className="animate-spin mx-auto my-2"
      color={appColors.primary}
    />
  );
};
