import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must exist");
}

const sql = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(sql);
3