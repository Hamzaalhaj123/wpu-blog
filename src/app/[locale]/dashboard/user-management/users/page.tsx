import getPaginatedUsers from "@/actions/users/getPaginatedUsers";
import UsersTable from "@/components/users/UsersTable";
import parseSearchParams from "@/utils/parseSearchParams";
import { paginationValidator } from "@/validators/util/paginationValidator";

type PageProps = { searchParams: Record<string, string> };

export default async function Page({ searchParams }: PageProps) {
  const { data } = parseSearchParams(searchParams, paginationValidator);
  const page = data?.page ?? 1;
  const paginatedRequest = await getPaginatedUsers(page);

  return <UsersTable users={paginatedRequest} />;
}
