"use client";

import addComment from "@/actions/comments/addComment";
import Button from "@/components/shared/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/shared/Form";
import { Textarea } from "@/components/shared/TextArea";
import { commentSchema, CommentSchema, SelectCommentModel } from "@/db/schemas/commentTable";
import useServerAction from "@/hooks/utils/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReplyIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ReplyCommentFormProps = {
  blogId: SelectCommentModel["blogId"];
  authorId: SelectCommentModel["authorId"];
  parentId: SelectCommentModel["parentId"];
  toggleReply: () => void;
};

export default function ReplyCommentForm({ blogId, authorId, parentId, toggleReply }: ReplyCommentFormProps) {
  const [runAddComment, isPending] = useServerAction(addComment);
  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      blogId,
      authorId,
      parentId,
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const response = await runAddComment(values);
    form.reset();
    toggleReply();
    toast.success(response?.message);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex items-start gap-2">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea {...field} placeholder="Reply" className="min-h-0 resize-none" rows={1} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isPending} className="gap-2">
          <span className="text-sm">Reply</span>
          <ReplyIcon size={16} />
        </Button>
      </form>
    </Form>
  );
}
