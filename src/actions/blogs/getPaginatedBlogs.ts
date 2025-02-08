import getPaginatedQuery from "@/actions/utils/getPaginatedQuery";

export default async function getPaginatedBlogs(page: number, perPage = 10) {
  return await getPaginatedQuery("blogTable", page, perPage, { with: { author: true } });
}
