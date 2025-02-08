import { type DB } from "@/db/db";
import { BlogSchema, blogTable } from "@/db/schemas/blogTable";
import { faker } from "@faker-js/faker";

export default async function seedBlogs(db: DB) {
  const users = await db.query.userTable.findMany();

  const randomUsers = faker.helpers.arrayElements(users, { min: 2, max: 2 });

  const randomBlogs: BlogSchema[] = Array.from({ length: 50 }).map((_) => ({
    title: faker.lorem.sentence(),
    description: faker.lorem.sentences(),
    content: faker.lorem.sentences(),
    thumbnail: faker.image.url(),
    rating: faker.number.float({ min: 0, max: 5 }),
    readingTime: faker.number.int({ min: 5, max: 45 }),
    authorId: faker.helpers.arrayElement(randomUsers).id,
  }));
  await db.insert(blogTable).values(randomBlogs);
}
