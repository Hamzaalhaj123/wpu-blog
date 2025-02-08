"use client";

import { PaginatedQueryResult } from "@/actions/utils/getPaginatedQuery";
import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import DataTable from "@/components/shared/DataTable";
import routes from "@/config/routes";
import { SelectUserModel } from "@/db/schemas/userTable";
import { Link } from "@/lib/next-intl/navigation";
import cn from "@/utils/cn";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDownIcon, EyeIcon } from "lucide-react";

type UsersTableProps = { users: PaginatedQueryResult<SelectUserModel> };

const columns: ColumnDef<SelectUserModel>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => <AvatarGroup name={row.getValue("name")} image={row.getValue("avatar")} />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      const isSortAsc = column.getIsSorted() === "asc";
      return (
        <div className="flex items-center gap-2">
          Name
          <Button onClick={() => column.toggleSorting(isSortAsc)} icon size="none">
            <ChevronDownIcon className={cn("transition-transform", { "-scale-100": !isSortAsc })} />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    header: "",
    cell: (cell) => (
      <Button asChild icon>
        <Link href={routes.dashboard.userManagement.users.id(cell.row.original.id)}>
          <EyeIcon />
        </Link>
      </Button>
    ),
  },
];

export default function UsersTable({ users }: UsersTableProps) {
  return <DataTable columns={columns} data={users.data} paginationMetadata={users.metaData} />;
}
