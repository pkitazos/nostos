import { Generated, Selectable } from "kysely";

export interface Database {
  customers: CustomerTable;
  customer_images: CustomerImagesTable;
}

interface CustomerTable {
  id: Generated<string>;
  name: string;
  site_url: string | null;
  visible: boolean;
}

interface CustomerImagesTable {
  id: Generated<string>;
  customer_id: string;
  url: string;
  order_index: number;
  metadata: Generated<Record<string, unknown>>;
}

export type Customer = Selectable<CustomerTable>;
export type CustomerImage = Selectable<CustomerImagesTable>;
