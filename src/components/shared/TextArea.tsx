"use client";

import cn from "@/utils/cn";
import { FormEvent, forwardRef, KeyboardEvent, useCallback } from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  const handleResize = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    const element = e.currentTarget;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight + 1}px`;
  }, []);
  const handleKeydown = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!e.repeat) {
        const submitEvent = new Event("submit", { cancelable: true, bubbles: true });
        const element = e.target as HTMLTextAreaElement;
        element.form?.dispatchEvent(submitEvent);
      }
    }
  }, []);
  return (
    <textarea
      onInput={handleResize}
      onKeyDown={handleKeydown}
      className={cn(
        "flex max-h-96 min-h-20 w-full overflow-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background scrollbar-thin scrollbar-thumb-muted scrollbar-thumb-rounded-md [scrollbar-gutter:stable] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
