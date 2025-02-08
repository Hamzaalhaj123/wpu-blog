import timestamps from "@/db/helpers/timestamps";
import { commentTable } from "@/db/schemas/commentTable";
import { userTable } from "@/db/schemas/userTable";
import { InferSelectModel, relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const commentReportTable = pgTable("comment_report", {
  id: serial("id").primaryKey(),
  commentId: integer("comment_id")
    .references(() => commentTable.id)
    .notNull(),
  reporterId: integer("reporter_id")
    .references(() => userTable.id)
    .notNull(),
  reason: text("reason").notNull(),
  ...timestamps,
});

export const reportRelations = relations(commentReportTable, ({ one }) => ({
  comment: one(commentTable, { fields: [commentReportTable.commentId], references: [commentTable.id] }),
  reportedBy: one(userTable, { fields: [commentReportTable.reporterId], references: [userTable.id] }),
}));

export const commentReportSchema = createInsertSchema(commentReportTable, {reason: schema => schema.reason.min(4)});
export type CommentReportSchema = z.infer<typeof commentReportSchema>;
export type SelectCommentReportModel = InferSelectModel<typeof commentReportTable>;
