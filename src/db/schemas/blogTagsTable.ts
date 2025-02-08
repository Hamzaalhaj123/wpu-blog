import { blogTable } from "@/db/schemas/blogTable";
import { tagTable } from "@/db/schemas/tagTable";
import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const blogTagsTable = pgTable(
  "blog_tags",
  {
    blogId: integer("blog_id")
      .notNull()
      .references(() => blogTable.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tagTable.id),
  },
  (table) => ({ pk: primaryKey({ columns: [table.blogId, table.tagId] }) }),
);

export const blogTagsRelations = relations(blogTagsTable, ({ one }) => ({
  blog: one(blogTable, { fields: [blogTagsTable.blogId], references: [blogTable.id] }),
  tag: one(tagTable, { fields: [blogTagsTable.tagId], references: [tagTable.id] }),
}));

export const blogTagsSchema = createInsertSchema(blogTagsTable);

export type BlogTagsSchema = z.infer<typeof blogTagsSchema>;
