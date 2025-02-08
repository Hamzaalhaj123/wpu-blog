import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
export type ServerActionResponse = { success: boolean; message: string };

export default function useServerAction<P extends any[], R extends ServerActionResponse>(
  action: (...args: P) => Promise<R>,
  onFinished?: (_: R | undefined) => void,
  loadingLabel ?: string,
): [(...args: P) => Promise<R | undefined>, boolean] {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("GENERAL");
  const [result, setResult] = useState<R>();
  const [finished, setFinished] = useState(false);
  const resolver = useRef<(value?: R | PromiseLike<R>) => void>();

  useEffect(() => {
    if (!finished) return;

    if (onFinished) onFinished(result);
    resolver.current?.(result);
  }, [result, finished, onFinished]);

  const runAction = async (...args: P): Promise<R | undefined> => {
    startTransition(() => {
      const toastId = toast.loading(loadingLabel ?? t("please_wait"));
      action(...args).then((data) => {
        setResult(data);
        setFinished(true);
        toast[data.success ? "success" : "error"](data.message, { id: toastId });
      });
    });

    return new Promise((resolve) => {
      resolver.current = resolve;
    });
  };

  return [runAction, isPending];
}
