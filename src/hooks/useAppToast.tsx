import { useTranslations } from "next-intl";
import { toast } from "sonner";

type ToastPropTypes = {
  title?: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

const globalStylingSettings = {
  title: "font-bold text-white",
  description: "text-white",
};

export const useAppToast = () => {
  const tUtils = useTranslations("utils");

  const toastWarning = ({
    title = tUtils("toast.warningTitle"),
    description,
    action,
  }: ToastPropTypes) => {
    toast.warning(title, {
      description,
      action,
      classNames: {
        ...globalStylingSettings,
        toast: "bg-orange-400",
      },
    });
  };

  const toastInfo = ({
    title = tUtils("toast.infoTitle"),
    description,
    action,
  }: ToastPropTypes) => {
    toast.info(title, {
      description,
      action,
      classNames: {
        ...globalStylingSettings,
        toast: "bg-sky-400",
        title: "font-bold text-gray-500",
        description: "text-gray-500",
      },
    });
  };

  const toastError = ({
    title = tUtils("toast.errorTitle"),
    description,
    action,
  }: ToastPropTypes) => {
    toast.error(title, {
      description,
      action,
      classNames: {
        ...globalStylingSettings,
        toast: "bg-rose-400",
      },
    });
  };

  const toastSuccess = ({
    title = tUtils("toast.successTitle"),
    description,
    action,
  }: ToastPropTypes) => {
    toast.error(title, {
      description,
      action,
      classNames: {
        ...globalStylingSettings,
        toast: "bg-teal-400",
        title: "font-bold text-gray-500",
        description: "text-gray-500",
      },
    });
  };

  return { toastWarning, toastInfo, toastError, toastSuccess };
};
