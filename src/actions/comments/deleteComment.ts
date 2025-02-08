"use server";

import { getCurrentSession } from "@/actions/auth/getCurrentSession";
import routes from "@/config/routes";
import { db } from "@/db/db";
import { commentSchema, commentTable } from "@/db/schemas/commentTable";
import { ServerActionResponse } from "@/hooks/utils/useServerAction";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function deleteComment(data: unknown): Promise<ServerActionResponse> {
  try {
    const comment = commentSchema.required().parse(data);
    const { session } = await getCurrentSession();
    if (!session) {
      return { success: false, message: "you are not signed in" };
    }
    if (session.userId !== comment.authorId) {
      return { success: false, message: "you don't have permission to delete this comment" };
    }
    await db.delete(commentTable).where(eq(commentTable.id, comment.id));
    revalidatePath(routes.blog.id(comment.blogId));
    return { success: true, message: "comment deleted successfully" };
  } catch (error) {
    return { success: false, message: "an error occurred" };
  }
}
