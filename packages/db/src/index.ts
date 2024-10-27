import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { Database } from "./types";
import { CustomerPortfolioDB } from "./types";

const createDB = () => {
  const dialect = new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
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

export const db = createDB();

// Export the CustomerPortfolioDB instance
export const customerDB = new CustomerPortfolioDB(db);

// Re-export types
export type { Customer, CustomerImage } from "./types";
export { CustomerPortfolioDB } from "./types";
