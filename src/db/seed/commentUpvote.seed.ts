import { type DB } from "@/db/db";
import { CommentUpvoteSchema, commentUpvoteTable } from "@/db/schemas/commentUpvoteTable";
import { faker } from "@faker-js/faker";

export default async function seedCommentUpvotes(db: DB) {
  const [comments, users] = await Promise.all([db.query.commentTable.findMany(), db.query.userTable.findMany()]);

  const commentUpvotes: CommentUpvoteSchema[] = comments.flatMap<CommentUpvoteSchema>((comment) => {
    const randomUsers = faker.helpers.arrayElements(users);
    return randomUsers.map((user) => ({ commentId: comment.id, userId: user.id }));
  });

  await db.insert(commentUpvoteTable).values(commentUpvotes);
}
