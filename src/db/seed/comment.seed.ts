import { type DB } from "@/db/db";
import { CommentSchema, commentTable } from "@/db/schemas/commentTable";
import { faker } from "@faker-js/faker";

export default async function seedComments(db: DB) {
  const [blogs, users] = await Promise.all([db.query.blogTable.findMany(), db.query.userTable.findMany()]);

  const randomComments: CommentSchema[] = blogs.flatMap((blog) =>
    Array.from({ length: 10 }).map(() => ({
      blogId: blog.id,
      comment: faker.lorem.sentences(),
      authorId: faker.helpers.arrayElement(users).id,
    })),
  );
  await db.insert(commentTable).values(randomComments);

  const comments = await db.query.commentTable.findMany();
  const childComments: CommentSchema[] = comments.map((comment) => ({
    parentId: comment.id,
    blogId: comment.blogId,
    authorId: faker.helpers.arrayElement(users).id,
    comment: faker.lorem.sentences(),
  }));
  await db.insert(commentTable).values(childComments);
}
