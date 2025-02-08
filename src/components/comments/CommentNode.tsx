"use client";
import CommentDropdown from "@/components/comments/CommentDropdown";
import CommentReplyButton from "@/components/comments/CommentReplyButton";
import CommentUpvoteButton from "@/components/comments/CommentUpvoteButton";
import ReplyCommentForm from "@/components/comments/ReplyCommentForm";
import { TooltipProvider } from "@/components/shared/Tooltip";
import AutoHeightContainer from "@/components/utils/AutoHeightContainer";
import { SelectCommentModel } from "@/db/schemas/commentTable";
import { SelectCommentUpvoteModel } from "@/db/schemas/commentUpvoteTable";
import { SelectUserModel } from "@/db/schemas/userTable";
import { useSession } from "@/hooks/shared/useSession";
import useToggle from "@/hooks/utils/useToggle";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import { ElementRef, forwardRef } from "react";

export type CommentNodeProps = SelectCommentModel & {
  author: SelectUserModel;
  upvotes: SelectCommentUpvoteModel[];
  children?: CommentNodeProps[];
};

const CommentNode = forwardRef<ElementRef<"li">, CommentNodeProps>(({ children, ...comment }, ref) => {
  const { session } = useSession();
  const [isReply, toggleReply] = useToggle(false);

  return (
    <motion.li
      ref={ref}
      initial={{ height: 0, opacity: 0, scale: 0.9 }}
      animate={{ height: "auto", opacity: 1, scale: 1 }}
      exit={{ height: 0, opacity: 0, scale: 0.9 }}
    >
      <div className="mb-2 flex items-center">
        <div>{comment.author.name}</div>
        <DotIcon className="pt-1 text-muted-foreground" />
        <time className="text-muted-foreground">{formatDistanceToNow(comment.createdAt, { addSuffix: true })}</time>
        {session ? <CommentDropdown comment={comment} /> : null}
      </div>
      <p className="mb-2">{comment.comment}</p>
      {session ? (
        <div className="mb-2 flex items-center gap-4">
          <TooltipProvider>
            <CommentUpvoteButton upvotes={comment.upvotes} commentId={comment.id} userId={session.userId} />
            <CommentReplyButton isReply={isReply} toggleReply={toggleReply} />
          </TooltipProvider>
        </div>
      ) : null}
      <AutoHeightContainer>
        {session && isReply ? (
          <ReplyCommentForm blogId={comment.blogId} authorId={session.userId} parentId={comment.id} toggleReply={toggleReply} />
        ) : null}
      </AutoHeightContainer>
      {children ? (
        <ul className="mt-4 space-y-4 ps-8">
          {children.map((reply) => (
            <CommentNode key={reply.id} {...reply} />
          ))}
        </ul>
      ) : null}
    </motion.li>
  );
});
CommentNode.displayName = "CommentNode";
export default CommentNode;
