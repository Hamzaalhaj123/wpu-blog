import addCommentReport from "@/actions/comments/addCommentReport";
import deleteComment from "@/actions/comments/deleteComment";
import CommentReportDialog from "@/components/comments/CommentReportDialog";
import AlertDialogGroup from "@/components/shared/AlertDialogGroup";
import Button from "@/components/shared/Button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/shared/DropdownMenu";
import { CommentReportSchema } from "@/db/schemas/commentReportTable";
import { SelectCommentModel } from "@/db/schemas/commentTable";
import { useSession } from "@/hooks/shared/useSession";
import useServerAction from "@/hooks/utils/useServerAction";
import { EllipsisVerticalIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

type CommentDropdownProps = { comment: SelectCommentModel };

export default function CommentDropdown({ comment }: CommentDropdownProps) {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const t = useTranslations("GENERAL");
  const { session } = useSession();

  const [runDeleteComment, isDeletePending] = useServerAction(deleteComment);
  const [runReportComment, isReportPending] = useServerAction(addCommentReport);

  const handleDelete = useCallback(() => runDeleteComment(comment), [comment, runDeleteComment]);
  const handleReport = useCallback((values: CommentReportSchema) => runReportComment(values), [runReportComment]);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button icon variant="muted" className="ms-auto">
            <EllipsisVerticalIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {session?.userId !== comment.authorId ? (
            <DropdownMenuItem onClick={() => setReportDialogOpen(true)} disabled={isReportPending}>
              {t("report")}
            </DropdownMenuItem>
          ) : null}
          {session?.userId === comment.authorId ? (
            <DropdownMenuItem onClick={() => setDeleteDialogOpen(true)} disabled={isDeletePending}>
              {t("delete")}
            </DropdownMenuItem>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
      <CommentReportDialog
        dialogProps={{ open: reportDialogOpen, onOpenChange: setReportDialogOpen }}
        comment={comment}
        onReportSend={handleReport}
      />
      <AlertDialogGroup
        alertDialogProps={{ open: deleteDialogOpen, onOpenChange: setDeleteDialogOpen }}
        title={t("delete")}
        onConfirm={handleDelete}
      />
    </>
  );
}

export function toFormData(obj: Record<string, any>, formData: FormData = new FormData(), parentKey?: string): FormData {
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const value = obj[key];
    const formKey = parentKey ? `${parentKey}[${key}]` : key;

    if (value instanceof File || value instanceof Blob) {
      formData.append(formKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        toFormData({ [`${key}[${index}]`]: item }, formData, parentKey);
      });
    } else if (typeof value === "object" && value !== null) {
      toFormData(value, formData, formKey);
    } else {
      formData.append(formKey, value as string);
    }
  }
  return formData;
}
