"use client";

import Button from "@/components/shared/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shared/Dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/Form";
import { Textarea } from "@/components/shared/TextArea";
import { CommentReportSchema, commentReportSchema } from "@/db/schemas/commentReportTable";
import { SelectCommentModel } from "@/db/schemas/commentTable";
import { useSession } from "@/hooks/shared/useSession";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogProps } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

type CommentReportDialogProps = {
  dialogProps: DialogProps;
  comment: SelectCommentModel;
  onReportSend: (values: CommentReportSchema) => void;
};

export default function CommentReportDialog({ dialogProps, comment, onReportSend }: CommentReportDialogProps) {
  const generalTranslations = useTranslations("GENERAL");
  const commentReportTranslations = useTranslations("COMMENT_REPORT");
  const { session } = useSession();

  const form = useForm<CommentReportSchema>({
    resolver: zodResolver(commentReportSchema),
    defaultValues: { commentId: comment.id, reporterId: session?.userId },
  });

  const onSubmit = form.handleSubmit((values) => {
    onReportSend(values);
    dialogProps.onOpenChange?.(false);
  });

  return (
    <Dialog {...dialogProps}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{commentReportTranslations("title")}</DialogTitle>
          <DialogDescription>{commentReportTranslations("description")}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={onSubmit}>
            <fieldset>
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{generalTranslations("reason")}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="resize-none"
                        placeholder={commentReportTranslations("reason_placeholder")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="muted" outline type="button">
                    {generalTranslations("cancel")}
                  </Button>
                </DialogClose>
                <Button disabled={!form.formState.isValid}>{generalTranslations("report")}</Button>
              </DialogFooter>
            </fieldset>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
