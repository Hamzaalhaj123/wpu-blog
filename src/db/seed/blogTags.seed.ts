import { type DB } from "@/db/db";
import { BlogTagsSchema, blogTagsTable } from "@/db/schemas/blogTagsTable";
import { faker } from "@faker-js/faker";

export default async function seedBlogTags(db: DB) {
  const [tags, blogs] = await Promise.all([db.query.tagTable.findMany(), db.query.blogTable.findMany()]);

  const blogTags: BlogTagsSchema[] = blogs.flatMap<BlogTagsSchema>((blog) => {
    const randomTags = faker.helpers.arrayElements(tags);
    return randomTags.map((tag) => ({ blogId: blog.id, tagId: tag.id }));
  });

  await db.insert(blogTagsTable).values(blogTags);
}
