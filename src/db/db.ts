import postgres from "postgres";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
declare global {
  var db: PostgresJsDatabase<typeof schema> | undefined;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must exist");
}

let db: PostgresJsDatabase<typeof schema>;
if (process.env.NODE_ENV === "development") {
  db = drizzle(postgres(process.env.DATABASE_URL), { schema });
} else {
  if (!global.db) {
    global.db = drizzle(postgres(process.env.DATABASE_URL), { schema });
    db = global.db;
  }
}

export { db };
// const sql = postgres(process.env.DATABASE_URL as string);
// const db = drizzle(sql);
// export default db;
