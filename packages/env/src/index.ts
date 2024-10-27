import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

// Shared schema for all apps
const sharedSchema = {
  DATABASE_URL: z.string().url(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
};

// Shared client schema (if needed)
const sharedClientSchema = {
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
};

// Admin dashboard specific schema
export const createAdminEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
      // Admin-specific server vars
      CLERK_SECRET_KEY: z.string(),
    },
    client: {
      ...sharedClientSchema,
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
      // Admin-specific client vars
    },
    clientPrefix: "NEXT_PUBLIC_",
    runtimeEnv: process.env,
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  });

// Marketing site specific schema
export const createMarketingEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
      // Marketing-specific server vars
      REVALIDATE_TOKEN: z.string().optional(),
    },
    client: {
      ...sharedClientSchema,
      // Marketing-specific client vars
    },
    clientPrefix: "NEXT_PUBLIC_",
    runtimeEnv: process.env,
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  });

// DB package specific schema - doesn't need client env vars
export const createDatabaseEnv = () =>
  createEnv({
    server: {
      ...sharedSchema,
    },
    runtimeEnv: process.env,
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  });

// Type helpers
export type MarketingEnv = ReturnType<typeof createMarketingEnv>;
export type AdminEnv = ReturnType<typeof createAdminEnv>;
export type DbEnv = ReturnType<typeof createDatabaseEnv>;
