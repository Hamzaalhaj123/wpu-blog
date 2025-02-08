import { db } from "@/db/db";
import { blogTable, SelectBlogModel } from "@/db/schemas/blogTable";
import { blogTagsTable } from "@/db/schemas/blogTagsTable";
import { userTable } from "@/db/schemas/userTable";
import delay from "@/utils/delay";
import { and, eq, inArray, ne } from "drizzle-orm";

export default async function getRelatedBlogsByBlogId(blogId: SelectBlogModel["id"]) {
  await delay(5000);
  const relatedBlogsQuery = await db
    .selectDistinctOn([blogTagsTable.blogId])
    .from(blogTagsTable)
    .where(
      and(
        ne(blogTagsTable.blogId, blogId),
        inArray(
          blogTagsTable.tagId,
          db
            .selectDistinctOn([blogTagsTable.blogId], { tag: blogTagsTable.tagId })
            .from(blogTagsTable)
            .where(eq(blogTagsTable.blogId, blogId)),
        ),
      ),
    )
    .innerJoin(blogTable, eq(blogTable.id, blogTagsTable.blogId))
    .innerJoin(userTable, eq(blogTable.authorId, userTable.id));
  return relatedBlogsQuery.map((item) => ({ ...item.blog, author: item.user }));
}
