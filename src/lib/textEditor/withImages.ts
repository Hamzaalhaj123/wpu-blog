import { Editor, Element } from "slate";

const withImages = (editor: Editor) => {
  const { isVoid } = editor;
  editor.isVoid = (element: Element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  return editor;
};
export default withImages;
