import { db } from "@/db/db";
import { blogTable } from "@/db/schemas/blogTable";
import delay from "@/utils/delay";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function getBlogById(blogId: number) {
  // await delay(7000);
  const blog = await db.query.blogTable.findFirst({
    with: {
      author: true,
      blogTags: {
        columns: { blogId: false, tagId: false },
        with: { tag: true },
      },
    },
    where: eq(blogTable.id, blogId),
  });

  if (!blog) notFound();

  const author = blog.author;
  const tags = blog.blogTags.map((blogTag) => blogTag.tag);
  return { blog, author, tags };
}
