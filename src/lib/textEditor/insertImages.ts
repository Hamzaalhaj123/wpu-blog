import { CustomElement } from "@/types/richTextEditor";
import { Editor, Transforms } from "slate";

const insertImage = (editor: Editor, url: string, alt: string, width: number, height: number) => {
  const text = { text: "" };
  const image: CustomElement = { type: "image", src: url, alt, children: [text], width, height };
  Transforms.insertNodes(editor, image);
  Transforms.insertNodes(editor, {
    type: "paragraph",
    children: [{ text: "" }],
  });
};
export default insertImage;
