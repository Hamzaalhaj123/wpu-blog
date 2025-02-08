import { type DB } from "@/db/db";
import { CommentReportSchema, commentReportTable } from "@/db/schemas/commentReportTable";
import { faker } from "@faker-js/faker";

export default async function seedCommentReports(db: DB) {
  const [comments, users] = await Promise.all([db.query.commentTable.findMany(), db.query.userTable.findMany()]);

  const commentReports: CommentReportSchema[] = faker.helpers
    .arrayElements(comments, { min: 300, max: 500 })
    .flatMap<CommentReportSchema>((comment) =>
      Array.from({ length: 3 }).map((_) => {
        const reporter = faker.helpers.arrayElement(users.filter((user) => user.id !== comment.authorId));
        return { commentId: comment.id, reporterId: reporter.id, reason: faker.lorem.sentences() };
      }),
    );

  await db.insert(commentReportTable).values(commentReports);
}
