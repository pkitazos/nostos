import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export function ImageSection({
  children,
  className,
}: {
  children?: ReactNode;
  className?: ClassValue;
}) {
  return (
    <section className={cn("px-auto flex w-full", className)}>
      {children}
    </section>
  );
}
