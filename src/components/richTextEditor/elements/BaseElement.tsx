import CodeBlockElement from "@/components/richTextEditor/elements/CodeBlockElement";
import HeadingElement from "@/components/richTextEditor/elements/HeadingElement";
import ListElement from "@/components/richTextEditor/elements/ListElement";
import ImageElement from "@/components/richTextEditor/elements/ImageElement";
import TextElement from "@/components/richTextEditor/elements/TextElement";
import ListItemElement from "@/components/richTextEditor/elements/UnorderedListItemElement";
import { RenderElementProps } from "slate-react";

export default function BaseElement(props: RenderElementProps) {
  switch (props.element.type) {
    case "code-block":
      return <CodeBlockElement {...props} />;
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return <HeadingElement {...props} />;
    case "ul":
    case "ol":
      return <ListElement {...props} />;
    case "li":
      return <ListItemElement {...props} />;
    case "image":
      return <ImageElement {...props} />;
    default:
      return <TextElement {...props} />;
  }
}
