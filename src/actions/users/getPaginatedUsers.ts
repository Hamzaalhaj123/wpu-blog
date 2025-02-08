import getPaginatedQuery from "@/actions/utils/getPaginatedQuery";

export default async function getPaginatedUsers(page: number, perPage = 10) {
  return getPaginatedQuery("userTable", page, perPage);
}
