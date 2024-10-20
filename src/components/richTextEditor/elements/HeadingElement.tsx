import { Heading } from "@/types/richTextEditor";
import { RenderElementProps } from "slate-react";

export default function HeadingElement({ element, attributes, children }: RenderElementProps) {
  const Heading = element.type as Heading;

  return <Heading {...attributes} className={headingSizes[Heading]} >{children}</Heading>;
}

const headingSizes: Record<Heading, string> = {
  h1: "text-6xl",
  h2: "text-5xl",
  h3: "text-4xl",
  h4: "text-3xl",
  h5: "text-2xl",
  h6: "text-xl",
};
