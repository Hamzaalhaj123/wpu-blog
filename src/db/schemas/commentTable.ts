import timestamps from "@/db/helpers/timestamps";
import { blogTable } from "@/db/schemas/blogTable";
import { commentReportTable } from "@/db/schemas/commentReportTable";
import { commentUpvoteTable } from "@/db/schemas/commentUpvoteTable";
import { userTable } from "@/db/schemas/userTable";
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm";
import { AnyPgColumn, integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const commentTable = pgTable("comment", {
  id: serial("id").primaryKey(),
  parentId: integer("parent_id").references((): AnyPgColumn => commentTable.id, { onDelete: "cascade" }),
  authorId: integer("author_id")
    .references(() => userTable.id)
    .notNull(),
  blogId: integer("blog_id")
    .references(() => blogTable.id)
    .notNull(),
  comment: text("comment").notNull(),
  ...timestamps,
});

export const commentRelations = relations(commentTable, ({ one, many }) => ({
  blog: one(blogTable, { fields: [commentTable.blogId], references: [blogTable.id] }),
  author: one(userTable, { fields: [commentTable.authorId], references: [userTable.id] }),
  upvotes: many(commentUpvoteTable),
  reports: many(commentReportTable),
}));

export const commentSchema = createInsertSchema(commentTable, { comment: (schema) => schema.comment.trim().min(1) });
export type SelectCommentModel = InferSelectModel<typeof commentTable>;
export type InsertCommentModel = InferInsertModel<typeof commentTable>;
export type CommentSchema = z.infer<typeof commentSchema>;
