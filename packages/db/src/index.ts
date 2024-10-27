import { createDatabaseEnv } from "@nostos/env";
import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { Database } from "./types";

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

export const db = createDB();

// Export types
export { CustomerPortfolioDB } from "./types";
export type { Customer, CustomerImage, Database } from "./types";
