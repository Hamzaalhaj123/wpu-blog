import { StaticImageData } from "next/image";
import { Descendant } from "slate";

export type FontSize = "xs" | "sm" | "md" | "lg" | "xl";
export type Color = "default" | "primary" | "secondary" | "destructive" | "success" | "warning" | "accent";
export type Format = "bold" | "italic" | "underline" | "strikethrough";

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type List = "ul" | "ol" | "li";
export type Code = "code-block" | "code-line";
export type ElementType = "paragraph" | "image" | Heading | List | Code;

export type ParagraphElement = {
  type: ElementType;
  fontSize?: FontSize;
  children: Descendant[];
};

export type CodeBlockElement = {
  type: "code-block";
  language: string;
  children: Descendant[];
};

export type CodeLineElement = {
  type: "code-line";
  children: Descendant[];
};

export type ImageElement = {
  type: ElementType;
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  children: Descendant[];
};

export type CustomElement = ParagraphElement | ImageElement | CodeBlockElement | CodeLineElement;

export type CustomText = { text: string; formats?: Format[]; textColor?: Color; highlightColor?: Color };
