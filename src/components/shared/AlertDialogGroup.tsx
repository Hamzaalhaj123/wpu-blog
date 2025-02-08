import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shared/AlertDialog";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { useTranslations } from "next-intl";
import { MouseEventHandler, ReactNode } from "react";

type AlertDialogGroupProps = {
  children?: ReactNode;
  alertDialogProps?: AlertDialogProps;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
};

export default function AlertDialogGroup({
  alertDialogProps,
  children,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
}: AlertDialogGroupProps) {
  const t = useTranslations("GENERAL");
  return (
    <AlertDialog {...alertDialogProps}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title ? <AlertDialogTitle>{title}</AlertDialogTitle> : null}
          <AlertDialogDescription>{description ?? t("are_you_sure")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText ?? t("cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{confirmText ?? t("confirm")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
