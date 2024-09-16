import { randomUUID } from "crypto";
import { addMinutes } from "date-fns";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const verificationCodes = pgTable("verification_codes", {
  id: integer("id")
    .primaryKey()
    .references(() => users.id),
  code: text("code").default(randomUUID()).notNull(),

  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  })
    .default(addMinutes(new Date(), 15))
    .notNull(),
});
