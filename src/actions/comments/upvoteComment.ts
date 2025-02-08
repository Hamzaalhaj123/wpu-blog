"use server";

import { db } from "@/db/db";
import { commentUpvoteSchema, commentUpvoteTable } from "@/db/schemas/commentUpvoteTable";
import { ServerActionResponse } from "@/hooks/utils/useServerAction";

export default async function upvoteComment(data: unknown): Promise<ServerActionResponse> {
  try {
    const upvote = commentUpvoteSchema.parse(data);
    await db.insert(commentUpvoteTable).values(upvote);
    // revalidatePath(routes.blog.id());
    return { success: true, message: "Comment upvoted" };
  } catch (error) {
    return { success: false, message: "an error occurred" };
  }
} 
