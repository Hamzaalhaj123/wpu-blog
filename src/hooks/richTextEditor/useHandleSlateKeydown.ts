import toggleFormat from "@/lib/textEditor/toggleFormat";
import { KeyboardEvent, useCallback } from "react";
import { Editor } from "slate";

const hotKeys = {
  undo: {
    title: "Undo",
    hotkey: "Ctrl + Z",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyZ") {
        event.preventDefault();
        editor.undo();
        return true;
      }
      return false;
    },
  },
  redo: {
    title: "Redo",
    hotkey: "Ctrl + Y",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyY") {
        event.preventDefault();
        editor.redo();
        return true;
      }
      return false;
    },
  },
  toggleBold: {
    title: "Toggle bold",
    hotkey: "Ctrl + B",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyB") {
        event.preventDefault();
        toggleFormat(editor, "bold");
        return true;
      }
      return false;
    },
  },
  toggleItalic: {
    title: "Toggle italic",
    hotkey: "Ctrl + I",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyI") {
        event.preventDefault();
        toggleFormat(editor, "italic");
        return true;
      }
      return false;
    },
  },
  toggleUnderline: {
    title: "Toggle underline",
    hotkey: "Ctrl + U",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyU") {
        event.preventDefault();
        toggleFormat(editor, "underline");
        return true;
      }
      return false;
    },
  },
  toggleStrikethrough: {
    title: "Toggle strikethrough",
    hotkey: "Ctrl + Shift + S",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.shiftKey && event.code === "KeyS") {
        event.preventDefault();
        toggleFormat(editor, "strikethrough");
        return true;
      }
      return false;
    },
  },
};

export default function useHandleSlateKeydown(editor: Editor) {
  const hotKeysArr = Object.keys(hotKeys).map((key) => hotKeys[key as keyof typeof hotKeys]);
  return useCallback(
    (event: KeyboardEvent) => {
      for (let i = 0; i < hotKeysArr.length; i++) {
        if (hotKeysArr[i].callback(event, editor)) return;
      }
    },
    [editor],
  );
}
