import { cn } from "apps/marketing/src/lib/utils";
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
        "mx-auto w-full max-w-12xl px-6 md:px-9 lg:px-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
