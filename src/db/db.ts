import * as blogTable from "@/db/schemas/blogTable";
import * as blogTagsTable from "@/db/schemas/blogTagsTable";
import * as commentReportTable from "@/db/schemas/commentReportTable";
import * as commentTable from "@/db/schemas/commentTable";
import * as commentUpvoteTable from "@/db/schemas/commentUpvoteTable";
import * as sessionTable from "@/db/schemas/sessionTable";
import * as tagTable from "@/db/schemas/tagTable";
import * as userTable from "@/db/schemas/userTable";
import * as verificationCodeTable from "@/db/schemas/verificationCodeTable";
import env from "@/lib/env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const schema = {
  ...userTable,
  ...sessionTable,
  ...verificationCodeTable,
  ...commentTable,
  ...blogTable,
  ...blogTagsTable,
  ...tagTable,
  ...commentUpvoteTable,
  ...commentReportTable,
};

const schemaTables = {
  userTable: userTable.userTable,
  sessionTable: sessionTable.sessionTable,
  verificationCodeTable: verificationCodeTable.verificationCodeTable,
  commentTable: commentTable.commentTable,
  blogTable: blogTable.blogTable,
  blogTagsTable: blogTagsTable.blogTagsTable,
  tagTable: tagTable.tagTable,
  commentUpvoteTable: commentUpvoteTable.commentUpvoteTable,
  commentReportTable: commentReportTable.commentReportTable,
};

// Singleton function to ensure only one db instance is created
function singleton<Value>(name: string, value: () => Value): Value {
  const globalAny: any = global;
  globalAny.__singletons = globalAny.__singletons || {};

  if (!globalAny.__singletons[name]) {
    globalAny.__singletons[name] = value();
  }

  return globalAny.__singletons[name];
}

// Function to create the database connection and apply migrations if needed
function createDatabaseConnection() {
  return drizzle(postgres(env.DATABASE_URL), {
    schema,
  });
}
const db = singleton("db", createDatabaseConnection);
export type DB = typeof db;

export { db, schema, schemaTables };
