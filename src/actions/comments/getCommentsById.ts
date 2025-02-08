import { db } from "@/db/db";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import { commentTable } from "@/db/schemas/commentTable";
import delay from "@/utils/delay";
import { desc, eq } from "drizzle-orm";

export default async function getCommentsById(id: SelectBlogModel["id"]) {
  await delay(3000);
  return await db.query.commentTable.findMany({
    where: eq(commentTable.blogId, id),
    with: { author: true, upvotes: true },
    orderBy: [desc(commentTable.createdAt)],
  });
}
