import { Generated, Kysely, Selectable } from "kysely";

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

// Core database operations
export class CustomerPortfolioDB {
  constructor(private readonly db: Kysely<Database>) {}

  // Customer operations
  async getCustomer(name: string) {
    return this.db
      .selectFrom("customers")
      .where("name", "=", name)
      .selectAll()
      .executeTakeFirst();
  }

  async getCustomers() {
    return this.db.selectFrom("customers").selectAll().execute();
  }

  async createCustomer(data: Omit<CustomerTable, "id">) {
    return this.db
      .insertInto("customers")
      .values(data)
      .returningAll()
      .executeTakeFirst();
  }

  async updateCustomer(id: string, data: Partial<Omit<CustomerTable, "id">>) {
    return this.db
      .updateTable("customers")
      .set(data)
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
  }

  // Customer image operations
  async getCustomerImages(customerId: string) {
    return this.db
      .selectFrom("customer_images")
      .where("customer_id", "=", customerId)
      .orderBy("order_index", "asc")
      .selectAll()
      .execute();
  }

  async addCustomerImage(data: Omit<CustomerImagesTable, "id">) {
    return this.db
      .insertInto("customer_images")
      .values(data)
      .returningAll()
      .executeTakeFirst();
  }

  async addCustomerImages(
    imageData: Omit<CustomerImagesTable, "id" | "customer_id">[],
    customer_id: string
  ) {
    const values = imageData.map((data) => ({ ...data, customer_id }));
    return this.db.insertInto("customer_images").values(values).returningAll();
  }

  async updateImageOrder(imageId: string, newOrder: number) {
    return this.db
      .updateTable("customer_images")
      .set({ order_index: newOrder })
      .where("id", "=", imageId)
      .returningAll()
      .executeTakeFirst();
  }

  async deleteImage(imageId: string) {
    return this.db
      .deleteFrom("customer_images")
      .where("id", "=", imageId)
      .returningAll()
      .executeTakeFirst();
  }

  async deleteImages(imageIds: string[]) {
    return this.db
      .deleteFrom("customer_images")
      .where("id", "in", imageIds)
      .returningAll()
      .executeTakeFirst();
  }
}
