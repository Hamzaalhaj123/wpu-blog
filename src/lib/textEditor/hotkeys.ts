import { KeyboardEvent } from "react";
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
        editor.redo();
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
        editor.redo();
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
        editor.redo();
        return true;
      }
      return false;
    },
  },
  toggleStrikethrough: {
    title: "Toggle strikethrough",
    hotkey: "Ctrl + Shift + S",
    callback: (event: KeyboardEvent, editor: Editor) => {
      if (event.ctrlKey && event.code === "KeyU") {
        event.preventDefault();
        editor.redo();
        return true;
      }
      return false;
    },
  },
};

export default hotKeys;
