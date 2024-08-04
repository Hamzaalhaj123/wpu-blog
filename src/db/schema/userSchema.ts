import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  boolean,
  uniqueIndex,
  integer,
  date,
} from "drizzle-orm/pg-core";

export const userSchema = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  isAdmin: boolean("is_admin").default(false),
});
