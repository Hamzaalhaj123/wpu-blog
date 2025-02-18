import { db, schema, schemaTables } from "@/db/db";
import {
  AnyColumn,
  asc,
  BuildQueryResult,
  count,
  DBQueryConfig,
  desc,
  ExtractTablesWithRelations,
  KnownKeysOnly,
} from "drizzle-orm";

type TableNames = keyof typeof db.query;

type TableColumns<T extends TableNames> = keyof ExtractTablesWithRelations<typeof schema>[T]["columns"];

type PaginationMetadata = {
  page: number;
  perPage: number;
  pageCount: number;
  totalCount: number;
};

export type DbQueryResult<T, P extends PaginationOptions | undefined = undefined> = {
  data: T[];
} & (P extends PaginationOptions ? { metaData: PaginationMetadata } : {});

export type QueryOptions<T extends TableNames> = DBQueryConfig<
  "many",
  true,
  ExtractTablesWithRelations<typeof schema>,
  ExtractTablesWithRelations<typeof schema>[T]
>;

export type SortOptions<T extends TableNames> = Partial<Record<TableColumns<T>, "asc" | "desc">>;

export type PaginationOptions = {
  page: number;
  perPage: number;
};

export type DbQueryOptions<T extends TableNames, Q extends QueryOptions<T>> = {
  table: T;
  pagination?: PaginationOptions | undefined;
  queryOptions?: Q;
  sort?: SortOptions<T>;
};

export default async function dbQuery<T extends TableNames, Q extends QueryOptions<T>>(
  props: DbQueryOptions<T, Q> & { pagination: PaginationOptions },
): Promise<
  DbQueryResult<
    BuildQueryResult<ExtractTablesWithRelations<typeof schema>, ExtractTablesWithRelations<typeof schema>[T], Q>,
    PaginationOptions
  >
>;
export default async function dbQuery<T extends TableNames, Q extends QueryOptions<T>>(
  props: DbQueryOptions<T, Q>,
): Promise<
  DbQueryResult<
    BuildQueryResult<ExtractTablesWithRelations<typeof schema>, ExtractTablesWithRelations<typeof schema>[T], Q>,
    undefined
  >
>;
export default async function dbQuery<T extends TableNames, Q extends QueryOptions<T>>({
  table,
  pagination,
  queryOptions,
  sort,
}: DbQueryOptions<T, Q>): Promise<
  DbQueryResult<
    BuildQueryResult<ExtractTablesWithRelations<typeof schema>, ExtractTablesWithRelations<typeof schema>[T], Q>,
    PaginationOptions | undefined
  >
> {
  const schemaTable = schemaTables[table];

  const queryConfig = { ...queryOptions } as KnownKeysOnly<Q, QueryOptions<T>>;

  if (sort) {
    const orderBy = [];
    for (const key in sort) {
      const tableColumn = schemaTable[key];
      if (!tableColumn) break;
      if (sort[key] === "asc") {
        orderBy.push(asc(tableColumn as unknown as AnyColumn));
      } else if (sort[key] === "desc") {
        orderBy.push(desc(tableColumn as unknown as AnyColumn));
      }
    }
    queryConfig.orderBy = orderBy;
  }

  if (pagination) {
    const [data, totalCount] = await Promise.all([
      db.query[table].findMany<Q>(queryConfig),
      db.select({ count: count() }).from(schemaTable),
    ]);
    queryConfig.offset = (pagination.page - 1) * pagination.perPage;
    queryConfig.limit = pagination.perPage;
    const pageCount = Math.ceil(totalCount[0].count / (pagination.perPage ?? 1));
    return {
      data,
      metaData: {
        page: pagination.page,
        perPage: pagination.perPage,
        pageCount,
        totalCount: totalCount[0].count,
      },
    };
  }
  const data = await db.query[table].findMany<Q>(queryConfig);
  return { data };
}
