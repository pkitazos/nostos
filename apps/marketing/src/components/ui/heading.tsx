import { cn } from "apps/marketing/src/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export function Heading({
  children: text,
  className,
}: {
  children?: ReactNode;
  className?: ClassValue;
}) {
  return (
    <h1
      className={cn("font-serif text-3xl sm:text-4xl md:text-5xl", className)}
    >
      {text}
    </h1>
  );
}
