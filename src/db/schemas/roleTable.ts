import { userTable } from "@/db/schemas/userTable";
import { integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";
export const roleTable = pgTable(
  "role_table",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => userTable.id),
    role: text("role"),
  },
  (role) => {
    return { pk: primaryKey({ columns: [role.userId, role.role], name: "pk_role" }) };
  },
);
