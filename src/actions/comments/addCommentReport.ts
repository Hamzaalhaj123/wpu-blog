"use server";

import { db } from "@/db/db";
import { commentReportSchema, commentReportTable } from "@/db/schemas/commentReportTable";
import { ServerActionResponse } from "@/hooks/utils/useServerAction";

export default async function addCommentReport(data: unknown): Promise<ServerActionResponse> {
  try {
    const comment = commentReportSchema.parse(data);
    await db.insert(commentReportTable).values(comment);
    return { success: true, message: "added report successfully" };
  } catch (error) {
    return { success: false, message: "an error occurred" };
  }
}
