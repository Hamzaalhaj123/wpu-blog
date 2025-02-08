import timestamps from "@/db/helpers/timestamps";
import { blogTable } from "@/db/schemas/blogTable";
import { commentReportTable } from "@/db/schemas/commentReportTable";
import { commentUpvoteTable } from "@/db/schemas/commentUpvoteTable";
import { InferSelectModel, relations } from "drizzle-orm";
import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const userTable = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  avatar: varchar("avatar", { length: 255 }),
  isVerified: boolean("is_verified").default(false).notNull(),
  ...timestamps,
});

export const userRelations = relations(userTable, ({ many }) => ({
  blogs: many(blogTable),
  upvotes: many(commentUpvoteTable),
  sentReports: many(commentReportTable),
}));

const userSchema = createInsertSchema(userTable);
export type SelectUserModel = InferSelectModel<typeof userTable>;
export type UserSchema = z.infer<typeof userSchema>;
