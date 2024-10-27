import { ClassValue } from "clsx";

import { cn } from "apps/admin/src/lib/utils";

export function ActionColumnLabel({ className }: { className?: ClassValue }) {
  return (
    <div className={cn("flex w-14 items-center justify-center", className)}>
      <p className="text-sm text-muted-foreground">Actions</p>
    </div>
  );
}
