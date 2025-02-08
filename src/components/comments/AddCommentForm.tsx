"use client";

import addComment from "@/actions/comments/addComment";
import Button from "@/components/shared/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/shared/Form";
import { Textarea } from "@/components/shared/TextArea";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import { commentSchema, CommentSchema } from "@/db/schemas/commentTable";
import useServerAction from "@/hooks/utils/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizonalIcon } from "lucide-react";
import { useForm } from "react-hook-form";

type AddCommentFormProps = {
  blogId: SelectBlogModel["id"];
  authorId: SelectBlogModel["authorId"];
};

export default function AddCommentForm({ blogId, authorId }: AddCommentFormProps) {
  const [runAddComment, isPending] = useServerAction(addComment);
  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      authorId,
      blogId,
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const response = await runAddComment(values);
    form.reset();
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="mb-4 rounded-md border border-border bg-popover p-4 shadow-md">
        <FormField
          name="comment"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Textarea {...field} className="resize-none" placeholder="Share your thoughts..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-end">
          <Button isLoading={isPending} size="small" type="submit" className="gap-1">
            <span>Submit</span>
            <SendHorizonalIcon size={16} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
