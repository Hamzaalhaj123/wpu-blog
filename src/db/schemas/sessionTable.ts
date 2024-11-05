import { userTable } from "@/db/schemas/userTable";
import { InferSelectModel } from "drizzle-orm";
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const sessionTable = pgTable("session_table", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
export type Session = InferSelectModel<typeof sessionTable>;
