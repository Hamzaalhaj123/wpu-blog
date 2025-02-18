import dbQuery from "@/actions/utils/dbQuery";

export default async function getPaginatedBlogs(page: number, perPage = 10) {
  return await dbQuery({ table: "blogTable", pagination: { page, perPage }, queryOptions: { with: { author: true } } });
}
