"use client";

import upvoteComment from "@/actions/comments/upvoteComment";
import Button from "@/components/shared/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shared/Tooltip";
import { SelectCommentModel } from "@/db/schemas/commentTable";
import { CommentUpvoteSchema, SelectCommentUpvoteModel } from "@/db/schemas/commentUpvoteTable";
import { SelectUserModel } from "@/db/schemas/userTable";
import useServerAction from "@/hooks/utils/useServerAction";
import { ThumbsUpIcon } from "lucide-react";
import { toast } from "sonner";

type CommentUpvoteProps = {
  upvotes: SelectCommentUpvoteModel[];
  userId: SelectUserModel["id"];
  commentId: SelectCommentModel["id"];
};

export default function CommentUpvote({ upvotes, userId, commentId }: CommentUpvoteProps) {
  const [runUpvoteComment, isPending] = useServerAction(upvoteComment);
  async function handleUpvote() {
    const data: CommentUpvoteSchema = { userId, commentId };
    const response = await runUpvoteComment(data);
    toast.success(response?.message);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          isLoading={isPending}
          onClick={handleUpvote}
          smooth
          size="none"
          variant="plain"
          className="gap-2 text-sm text-muted-foreground"
        >
          <span className="text-sm">{upvotes.length}</span>
          <ThumbsUpIcon size={16} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Upvote</TooltipContent>
    </Tooltip>
  );
}
