import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export function ContentSection({
  children,
  className,
}: {
  children?: ReactNode;
  className?: ClassValue;
}) {
  return (
    <section
      className={cn(
        "max-w-12xl mx-auto w-full px-6 md:px-9 lg:px-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
