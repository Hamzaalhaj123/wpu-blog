import dbQuery from "@/actions/utils/dbQuery";

export default async function getPaginatedUsers(page: number, perPage = 10, sort?: Record<string, string>) {
  return dbQuery({ table: "userTable", pagination: { page, perPage }, sort });
}
