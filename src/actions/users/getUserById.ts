import { db } from "@/db/db";
import { SelectUserModel, userTable } from "@/db/schemas/userTable";
import { eq } from "drizzle-orm";

export default function getUserById(userId: SelectUserModel["id"]) {
  return db.query.userTable.findFirst({ where: eq(userTable.id, userId) });
}
