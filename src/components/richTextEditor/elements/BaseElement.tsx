import CodeElement from "@/components/richTextEditor/elements/CodeElement";
import HeadingElement from "@/components/richTextEditor/elements/HeadingElement";
import TextElement from "@/components/richTextEditor/elements/TextElement";
import { RenderElementProps } from "slate-react";

export default function BaseElement(props: RenderElementProps) {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return <HeadingElement {...props} />;
    default:
      return <TextElement {...props} />;
  }
}
