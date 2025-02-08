"use server";

import routes from "@/config/routes";
import { db } from "@/db/db";
import { commentSchema, commentTable } from "@/db/schemas/commentTable";
import { ServerActionResponse } from "@/hooks/utils/useServerAction";
import { revalidatePath } from "next/cache";

export default async function addComment(data: unknown): Promise<ServerActionResponse> {
  try {
    const comment = commentSchema.parse(data);
    await db.insert(commentTable).values(comment);
    revalidatePath(routes.blog.id(comment.blogId));
    return { success: true, message: "comment added successfully" };
  } catch (error) {
    return { success: false, message: "an error occurred" };
  }
}
