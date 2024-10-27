import { Customer, CustomerImage, Database } from "@nostos/db";
import { createDatabaseEnv } from "@nostos/env";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

const env = createDatabaseEnv();

const createDB = () => {
  const dialect = new PostgresDialect({
    pool: new Pool({
      connectionString: env.DATABASE_URL,
      ssl:
        env.NODE_ENV === "production"
          ? {
              rejectUnauthorized: true,
            }
          : false,
      max: 10,
    }),
  });

  return new Kysely<Database>({
    dialect,
  });
};

class CustomerDatabase {
  private db: Kysely<Database>;

  constructor() {
    this.db = createDB();
  }

  // Customer operations
  async getCustomer(name: string) {
    await this.db
      .selectFrom("customers")
      .where("name", "=", name)
      .selectAll()
      .executeTakeFirst();
  }

  async getCustomers() {
    return await this.db.selectFrom("customers").selectAll().execute();
  }

  async createCustomer(data: Omit<Customer, "id">) {
    await this.db
      .insertInto("customers")
      .values(data)
      .returningAll()
      .executeTakeFirst();
  }

  async updateCustomer(id: string, data: Partial<Omit<Customer, "id">>) {
    await this.db
      .updateTable("customers")
      .set(data)
      .where("id", "=", id)
      .returningAll()
      .executeTakeFirst();
  }

  // Customer image operations
  async getCustomerImages(customerId: string) {
    await this.db
      .selectFrom("customer_images")
      .where("customer_id", "=", customerId)
      .orderBy("order_index", "asc")
      .selectAll()
      .execute();
  }

  async addCustomerImage(data: Omit<CustomerImage, "id">) {
    await this.db
      .insertInto("customer_images")
      .values(data)
      .returningAll()
      .executeTakeFirst();
  }

  async addCustomerImages(data: Omit<CustomerImage, "id">[]) {
    await this.db
      .insertInto("customer_images")
      .values(data)
      .returningAll()
      .execute();
  }

  async updateImageOrder(imageId: string, newOrder: number) {
    await this.db
      .updateTable("customer_images")
      .set({ order_index: newOrder })
      .where("id", "=", imageId)
      .returningAll()
      .executeTakeFirst();
  }

  async deleteImage(imageId: string) {
    await this.db
      .deleteFrom("customer_images")
      .where("id", "=", imageId)
      .returningAll()
      .executeTakeFirst();
  }

  async deleteImages(imageIds: string[]) {
    await this.db
      .deleteFrom("customer_images")
      .where("id", "in", imageIds)
      .returningAll()
      .executeTakeFirst();
  }
}

export const db = new CustomerDatabase();
