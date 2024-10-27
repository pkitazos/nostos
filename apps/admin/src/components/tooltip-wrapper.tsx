import { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface TooltipWrapperProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tip: ReactNode;
  children: ReactNode;
  duration?: number;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function WithTooltip({
  tip,
  children,
  duration = 250,
  align = "center",
  side = "top",
  ...rest
}: TooltipWrapperProps) {
  return (
    <TooltipProvider delayDuration={duration} {...rest}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent align={align} side={side}>
          {tip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
