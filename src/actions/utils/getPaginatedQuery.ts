import { db, schema, schemaTables } from "@/db/db";
import { count, DBQueryConfig, ExtractTablesWithRelations } from "drizzle-orm";

export type PaginatedQueryResult<T> = {
  data: T[];
  metaData: {
    page: number;
    perPage: number;
    pageCount: number;
    totalCount: number;
  };
};

export default async function getPaginatedQuery<
  T extends keyof typeof db.query,
  Q extends DBQueryConfig<"many", true, ExtractTablesWithRelations<typeof schema>, ExtractTablesWithRelations<typeof schema>[T]>,
>(table: T, page = 1, perPage = 10, query?: Q) {
  const offset = (page - 1) * perPage;
  //@ts-ignore
  const data = await db.query[table].findMany<Q>({ ...query, limit: perPage, offset });

  const totalCount = await db.select({ count: count() }).from(schemaTables[table]);
  const pageCount = Math.ceil(totalCount[0].count / perPage);
  return { data, metaData: { page, perPage, pageCount, totalCount: totalCount[0].count } };
}
