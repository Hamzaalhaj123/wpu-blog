"use client";

import type { DbQueryResult, PaginationOptions } from "@/actions/utils/dbQuery";
import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import DataTable from "@/components/shared/table/DataTable";
import routes from "@/config/routes";
import { SelectUserModel } from "@/db/schemas/userTable";
import { Link } from "@/lib/next-intl/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";

type UsersTableProps = { users: DbQueryResult<SelectUserModel, PaginationOptions> };

const columns: ColumnDef<SelectUserModel>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => <AvatarGroup name={row.getValue("name")} image={row.getValue("avatar")} />,
  },
  {
    accessorKey: "name",
    header: "Name",
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
