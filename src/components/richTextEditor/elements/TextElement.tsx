import { Element } from "slate";
import { RenderElementProps } from "slate-react";

export default function TextElement({ element, attributes, children }: RenderElementProps) {
  const fontSizeClassName = element.fontSize ? fontSizes[element.fontSize] : "";
  return (
    <p {...attributes} className={fontSizeClassName}>
      {children}
    </p>
  );
}

const fontSizes: Record<NonNullable<Element["fontSize"]>, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};
