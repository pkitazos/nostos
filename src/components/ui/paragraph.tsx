import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

export function Paragraph({
  children: text,
  className,
}: {
  children?: ReactNode;
  className?: ClassValue;
}) {
  return <p className={cn("text-justify tracking-tight", className)}>{text}</p>;
}
