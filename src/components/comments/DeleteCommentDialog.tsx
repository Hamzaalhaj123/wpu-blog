"use client";

import deleteComment from "@/actions/comments/deleteComment";
import AlertDialogGroup from "@/components/shared/AlertDialogGroup";
import routes from "@/config/routes";
import { SelectCommentModel } from "@/db/schemas/commentTable";
import useServerAction from "@/hooks/utils/useServerAction";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { useTranslations } from "next-intl";
import { revalidatePath } from "next/cache";
import { useCallback } from "react";
import { toast } from "sonner";

type DeleteCommentDialogProps = {
  dialogProps: AlertDialogProps;
  comment: SelectCommentModel;
};

export default function DeleteCommentDialog({ comment, dialogProps }: DeleteCommentDialogProps) {
  const t = useTranslations("GENERAL");
  const [runDeleteComment, isPending] = useServerAction(deleteComment);

  const handleDelete = useCallback(() => {
    toast.promise(runDeleteComment(comment), { loading: "deleting your comment", success: (data) => data?.message });
    revalidatePath(routes.blog.id(comment.blogId));
  }, [comment, runDeleteComment]);

  return !isPending ? <AlertDialogGroup alertDialogProps={dialogProps} title={t("report")} onConfirm={handleDelete} /> : null;
}
