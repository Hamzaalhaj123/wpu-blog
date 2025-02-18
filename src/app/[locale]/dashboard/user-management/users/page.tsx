import getPaginatedUsers from "@/actions/users/getPaginatedUsers";
import UsersTable from "@/components/users/UsersTable";
import parseSearchParams from "@/utils/parseSearchParams";
import { paginationValidator } from "@/validators/util/paginationValidator";
import { sortingValidator } from "@/validators/util/sortingValidator";

type PageProps = { searchParams: Record<string, string> };

export default async function Page({ searchParams }: PageProps) {
  const data = parseSearchParams(searchParams, paginationValidator);
  const sortData = parseSearchParams(searchParams, sortingValidator);

  
  const page = data.page ?? 1;
  const paginatedRequest = await getPaginatedUsers(page, 10, sortData?.sort);

  return <UsersTable users={paginatedRequest} />;
}
