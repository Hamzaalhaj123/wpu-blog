import { db, schema, schemaTables } from "@/db/db";
import { AnyColumn, asc, count, DBQueryConfig, desc, ExtractTablesWithRelations, SQL } from "drizzle-orm";

type TableNames = keyof typeof db.query;

type TableColumns<T extends TableNames> = keyof ExtractTablesWithRelations<typeof schema>[T]["columns"];

export type PaginatedQueryResult<T> = {
  data: T[];
  metaData: {
    page: number;
    perPage: number;
    pageCount: number;
    totalCount: number;
  };
};

export default async function getDbQuery<
  T extends TableNames,
  Q extends DBQueryConfig<"many", true, ExtractTablesWithRelations<typeof schema>, ExtractTablesWithRelations<typeof schema>[T]>,
>(table: T, page = 1, perPage = 10, query?: Q, filters?: Partial<Record<TableColumns<T>, "asc" | "desc">>) {
  const schemaTable = schemaTables[table];

  const offset = (page - 1) * perPage;

  const orderBy: SQL[] = [];
  for (const key in filters) {
    const tableColumn = schemaTable[key];
    if (filters[key] === "asc") orderBy.push(asc(tableColumn as AnyColumn));
    else orderBy.push(desc(tableColumn as AnyColumn));
  }

  //@ts-ignore
  const data = await db.query[table].findMany<Q>({ ...query, limit: perPage, offset, orderBy });

  const totalCount = await db.select({ count: count() }).from(schemaTable);
  const pageCount = Math.ceil(totalCount[0].count / perPage);
  return { data, metaData: { page, perPage, pageCount, totalCount: totalCount[0].count } };
}
