"use client";
import { Customer } from "@nostos/db";
import { ColumnDef } from "@tanstack/react-table";
import { WithTooltip } from "apps/admin/src/components/tooltip-wrapper";
import { Button, buttonVariants } from "apps/admin/src/components/ui/button";
import { ActionColumnLabel } from "apps/admin/src/components/ui/data-table/action-column";
import { DataTableColumnHeader } from "apps/admin/src/components/ui/data-table/column-header";
import { getSelectColumn } from "apps/admin/src/components/ui/data-table/select-col";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "apps/admin/src/components/ui/dropdown-menu";
import { copyToClipboard } from "apps/admin/src/lib/utils/copy-to-clipboard";
import {
  EyeOffIcon,
  MoreHorizontalIcon,
  PenIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";

export function useClientColumns(): ColumnDef<Customer>[] {
  //   {
  //   removeClient,
  //   removeClients,
  // }: {
  //   removeClient: (id: string) => Promise<void>;
  //   removeClients: (ids: string[]) => Promise<void>;
  // }
  const selectCol = getSelectColumn<Customer>();

  const cols: ColumnDef<Customer>[] = [
    {
      id: "ID",
      accessorFn: (row) => row.id,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" className="w-28" />
      ),
      cell: ({
        row: {
          original: { id },
        },
      }) => (
        <WithTooltip tip="copy full ID" className="w-18">
          <Button
            variant="ghost"
            onClick={async () => await copyToClipboard(id)}
          >
            <p className="w-16 truncate">{id}</p>
          </Button>
        </WithTooltip>
      ),
    },
    {
      id: "Name",
      accessorFn: (row) => row.name,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" className="w-32" />
      ),
      cell: ({ row }) => (
        <Link
          className={buttonVariants({ variant: "link" })}
          href={`./${row.original.id}`}
        >
          {row.original.name}
        </Link>
      ),
    },
    {
      accessorKey: "actions",
      id: "Actions",
      header: ({ table }) => {
        const someSelected =
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected();

        const selectedClientIds = table
          .getSelectedRowModel()
          .rows.map((e) => e.original.id);

        // function handleRemoveSelectedClients() {
        //   void removeClients(selectedClientIds).then(() =>
        //     table.toggleAllRowsSelected(false)
        //   );
        // }

        if (someSelected)
          return (
            <div className="flex w-14 items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontalIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" side="bottom">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:bg-red-100/40 focus:text-destructive">
                    <button className="flex items-center gap-2 text-sm">
                      <Trash2Icon className="h-4 w-4" />
                      <span>Remove selected clients</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );

        return <ActionColumnLabel />;
      },
      cell: ({
        row: {
          original: { id: clientId, name },
        },
      }) => (
        <div className="flex w-14 items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <span className="sr-only">Open menu</span>
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="center" side="bottom">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="group/item">
                <Link
                  className="flex items-center gap-2 text-primary underline-offset-4 group-hover/item:underline hover:underline"
                  href={`./${clientId}`}
                >
                  <PenIcon className="h-4 w-4" />
                  <span>Edit client details</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="group/item">
                <button className="flex items-center gap-2 text-sm">
                  <EyeOffIcon className="h-4 w-4" />
                  <span>Hide client from site</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-background text-destructive focus:bg-red-100/40 focus:text-destructive">
                <button className="flex items-center gap-2 text-sm">
                  <Trash2Icon className="h-4 w-4" />
                  <span>Remove Client {name}</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return [selectCol, ...cols];
}
