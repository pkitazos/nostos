import { ReactNode } from "react";
import { ClassValue } from "clsx";

import { cn } from "apps/admin/src/lib/utils";

export function PageWrapper({
  className,
  children,
}: {
  className?: ClassValue;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto pt-10 mt-6 flex h-max w-full max-w-5xl flex-col gap-10 px-6 pb-20",
        className
      )}
    >
      {children}
    </div>
  );
}
