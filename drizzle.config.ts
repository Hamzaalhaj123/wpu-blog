import type { Config } from "drizzle-kit";

// Read the .env file if it exists, or a file specified by the
// dotenv_config_path parameter that's passed to Node.js

if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL not found in environment");

export default {
  schema: "./src/db/schema/userSchema.ts",
  dialect: "postgresql",
  out: "./migrations",

  verbose: true,
  dbCredentials: { url: process.env.DATABASE_URL },
  strict: true,
} satisfies Config;
