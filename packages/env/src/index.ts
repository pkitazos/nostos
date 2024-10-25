import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

// Shared schema for all apps
const sharedSchema = {
  DATABASE_URL: z.string().url(),
};

// Admin dashboard specific schema
export const createAdminEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
      // Add admin-specific env vars here
    },
    runtimeEnv: process.env,
  });

// Marketing site specific schema
export const createMarketingEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
      // Add marketing-specific env vars here
    },
    runtimeEnv: process.env,
  });

// DB package specific schema
export const createDbEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
    },
    runtimeEnv: process.env,
  });

// Type helpers
export type MarketingEnv = ReturnType<typeof createMarketingEnv>;
export type AdminEnv = ReturnType<typeof createAdminEnv>;
export type DbEnv = ReturnType<typeof createDbEnv>;
