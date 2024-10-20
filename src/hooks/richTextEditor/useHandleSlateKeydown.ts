import toggleFormat from "@/lib/textEditor/toggleFormat";
import { KeyboardEvent, useCallback } from "react";
import { Editor } from "slate";

export default function useHandleSlateKeydown(editor: Editor) {
  return useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        if (event.code === "KeyB") {
          event.preventDefault();
          toggleFormat(editor, "bold");
        } else if (event.code === "KeyI") {
          event.preventDefault();
          toggleFormat(editor, "italic");
        } else if (event.code === "KeyU") {
          event.preventDefault();
          toggleFormat(editor, "underline");
        } else if (event.shiftKey && event.code === "KeyS") {
          event.preventDefault();
          toggleFormat(editor, "strikethrough");
        }
      }
    },
    [editor],
  );
}
