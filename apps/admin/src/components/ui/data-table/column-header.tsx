import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import type { Column } from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  EyeOffIcon,
  Search,
} from "lucide-react";

import { cn } from "apps/admin/src/lib/utils";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Input } from "../input";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  canFilter?: boolean;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  canFilter,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex h-full items-center space-x-2 py-1", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="my-1.5 -ml-1 flex h-full min-h-8 gap-2 py-1 text-left"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="h-4 min-w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="h-4 min-w-4" />
            ) : (
              <ArrowUpDownIcon className="h-4 min-w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="backdrop-blur-lg" align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOffIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {canFilter && (
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="top" className="mb-5 w-[300px]">
            <Input
              placeholder={`Filter ${title}`}
              value={(column.getFilterValue() as string) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="max-w-sm"
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}
