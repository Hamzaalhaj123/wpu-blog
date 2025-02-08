import { blogTagsTable } from "@/db/schemas/blogTagsTable";
import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const tagTable = pgTable("tag", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
});

export const tagRelations = relations(tagTable, ({ many }) => ({
  blogTags: many(blogTagsTable),
}));

export const tagSchema = createInsertSchema(tagTable);
export type TagSchema = z.infer<typeof tagSchema>;
export type SelectTagModel = InferSelectModel<typeof tagTable>;
