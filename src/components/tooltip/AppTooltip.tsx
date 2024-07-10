import { FC, ReactNode } from "react";
import "./styles.css";

type AppTooltipPropTypes = {
  message: string;
  children: ReactNode;
  wrapperCss?: string;
};

export const AppTooltip: FC<AppTooltipPropTypes> = ({
  message,
  children,
  wrapperCss,
}) => {
  return (
    <div className={`tooltip ${wrapperCss}`}>
      {children}
      <span className="tooltiptext">{message}</span>
    </div>
  );
};
