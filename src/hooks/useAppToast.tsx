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

const globalSettings = {
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
        ...globalSettings,
        toast: "bg-orange-400",
      },
    });
  };

  const toastInfo = ({ title = "", description, action }: ToastPropTypes) => {
    toast.info((title = tUtils("toast.infoTitle")), {
      description,
      action,
      classNames: {
        ...globalSettings,
        toast: "bg-sky-400",
        title: "font-bold text-gray-500",
        description: "text-gray-500",
      },
    });
  };

  const toastError = ({ title = "", description, action }: ToastPropTypes) => {
    toast.error((title = tUtils("toast.errorTitle")), {
      description,
      action,
      classNames: {
        ...globalSettings,
        toast: "bg-rose-400",
      },
    });
  };

  const toastSuccess = ({
    title = "",
    description,
    action,
  }: ToastPropTypes) => {
    toast.error((title = tUtils("toast.successTitle")), {
      description,
      action,
      classNames: {
        ...globalSettings,
        toast: "bg-teal-400",
        title: "font-bold text-gray-500",
        description: "text-gray-500",
      },
    });
  };

  return { toastWarning, toastInfo, toastError, toastSuccess };
};
