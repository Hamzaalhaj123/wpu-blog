import { commentTable } from "@/db/schemas/commentTable";
import { userTable } from "@/db/schemas/userTable";
import { InferSelectModel, relations } from "drizzle-orm";
import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const commentUpvoteTable = pgTable(
  "comment_upvote",
  {
    commentId: integer("comment_id")
      .notNull()
      .references(() => commentTable.id),
    userId: integer("user_id")
      .notNull()
      .references(() => userTable.id),
  },
  (table) => ({ pk: primaryKey({ columns: [table.commentId, table.userId] }) }),
);

export const commentUpvoteRelations = relations(commentUpvoteTable, ({ one }) => ({
  comment: one(commentTable, { fields: [commentUpvoteTable.commentId], references: [commentTable.id] }),
  user: one(userTable, { fields: [commentUpvoteTable.userId], references: [userTable.id] }),
}));

export type SelectCommentUpvoteModel = InferSelectModel<typeof commentUpvoteTable>;
export const commentUpvoteSchema = createInsertSchema(commentUpvoteTable);
export type CommentUpvoteSchema = z.infer<typeof commentUpvoteSchema>;
