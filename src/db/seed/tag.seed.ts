import { DB } from "@/db/db";
import { TagSchema, tagTable } from "@/db/schemas/tagTable";

const tags: TagSchema[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "Javascript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Vue.js" },
];

export default async function seedTags(db: DB) {
  await db.insert(tagTable).values(tags);
}
