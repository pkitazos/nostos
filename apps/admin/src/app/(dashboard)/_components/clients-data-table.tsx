"use client";

import { Customer } from "@nostos/db";
import { DataTable } from "apps/admin/src/components/ui/data-table";
import { useClientColumns } from "./clients-columns";

export function ClientsDataTable({ data }: { data: Customer[] }) {
  const clientsColumns = useClientColumns();
  return (
    <DataTable
      searchableColumn={{ id: "Name", displayName: "Client Names" }}
      columns={clientsColumns}
      data={data}
    />
  );
}
