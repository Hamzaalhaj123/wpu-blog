import timestamps from "@/db/helpers/timestamps";
import { blogTagsTable } from "@/db/schemas/blogTagsTable";
import { commentTable } from "@/db/schemas/commentTable";
import { userTable } from "@/db/schemas/userTable";
import { relations, sql, type InferSelectModel } from "drizzle-orm";
import { check, integer, pgTable, real, serial, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const blogTable = pgTable(
  "blog",
  {
    id: serial("id").primaryKey(),
    authorId: integer("author_id")
      .references(() => userTable.id)
      .notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    thumbnail: varchar("thumbnail", { length: 255 }).notNull(),
    content: text("content").notNull(),
    rating: real("rating"),
    readingTime: integer("reading_time").notNull(),
    ...timestamps,
  },
  (table) => ({
    rating: check("rating_check", sql`${table.rating} >= 0 AND ${table.rating} <= 5`),
  }),
);

export const blogRelations = relations(blogTable, ({ many, one }) => ({
  comments: many(commentTable),
  blogTags: many(blogTagsTable),
  author: one(userTable, { fields: [blogTable.authorId], references: [userTable.id] }),
}));

export const blogSchema = createInsertSchema(blogTable);
export type BlogSchema = z.infer<typeof blogSchema>;
export type SelectBlogModel = InferSelectModel<typeof blogTable>;
