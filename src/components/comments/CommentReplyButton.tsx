import Button from "@/components/shared/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shared/Tooltip";
import { ReplyIcon, XCircleIcon } from "lucide-react";

type CommentReplyButtonProps = { isReply: boolean; toggleReply: () => void };

export default function CommentReplyButton({ isReply, toggleReply }: CommentReplyButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={toggleReply} smooth size="none" variant="plain" className="gap-2 text-sm text-muted-foreground">
          {isReply ? <XCircleIcon size={16} /> : <ReplyIcon size={16} />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{isReply ? "Cancel" : "Reply"}</TooltipContent>
    </Tooltip>
  );
}
