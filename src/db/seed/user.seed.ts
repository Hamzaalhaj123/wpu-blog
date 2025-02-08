import { type DB } from "@/db/db";
import { UserSchema, userTable } from "@/db/schemas/userTable";
import { faker } from "@faker-js/faker";

export default async function seedUsers(db: DB) {
  const randomUsers: UserSchema[] = Array.from({ length: 10 }).map((_) => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password({ memorable: true }),
  }));
  await db.insert(userTable).values(randomUsers);
}
