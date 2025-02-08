import { DB, db } from "@/db/db";
import { blogTable } from "@/db/schemas/blogTable";
import { blogTagsTable } from "@/db/schemas/blogTagsTable";
import { commentReportTable } from "@/db/schemas/commentReportTable";
import { commentTable } from "@/db/schemas/commentTable";
import { commentUpvoteTable } from "@/db/schemas/commentUpvoteTable";
import { tagTable } from "@/db/schemas/tagTable";
import { userTable } from "@/db/schemas/userTable";
import seedBlogs from "@/db/seed/blog.seed";
import seedBlogTags from "@/db/seed/blogTags.seed";
import seedComments from "@/db/seed/comment.seed";
import seedCommentReports from "@/db/seed/commentReport.seed";
import seedCommentUpvotes from "@/db/seed/commentUpvote.seed";
import seedTags from "@/db/seed/tag.seed";
import seedUsers from "@/db/seed/user.seed";
import { sql, Table } from "drizzle-orm";

async function resetTable(db: DB, table: Table) {
  return db.execute(sql`truncate table ${table} restart identity cascade`);
}

async function seed() {
  for (const table of [commentUpvoteTable, commentReportTable, blogTagsTable, commentTable, tagTable, blogTable, userTable]) {
    await resetTable(db, table);
  }

  console.log("seeding users");
  await seedUsers(db);
  console.log("seeding tags");
  await seedTags(db);
  console.log("seeding blogs");
  await seedBlogs(db);
  console.log("seeding blog tags");
  await seedBlogTags(db);
  console.log("seeding comments");
  await seedComments(db);
  console.log("seeding comments upvotes");
  await seedCommentUpvotes(db);
  console.log("seeding comment reports");
  await seedCommentReports(db);
}

seed()
  .then(() => {
    console.log("seeding completed !");
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
