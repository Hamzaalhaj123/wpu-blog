import { StaticImageData } from "next/image";

export function asCustomElement<T extends ElementType>(element: CustomElement<T>) {
  return element;
}

export type FontSize = "xs" | "sm" | "md" | "lg" | "xl";

export type Color = "default" | "primary" | "secondary" | "destructive" | "success" | "warning" | "accent";

export type Format = "bold" | "italic" | "underline" | "strikethrough";

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ElementType = "paragraph" | "code" | "image" | Heading;

export type CustomText = { text: string; formats?: Format[]; textColor?: Color; highlightColor?: Color };
export type CustomElement<T extends ElementType> = {
  type: T;
  children: CustomText[];
  fontSize?: FontSize;
} & CustomElementProps<T>;

export type CustomElementProps<T extends ElementType> = T extends "paragraph"
  ? { fontSize?: FontSize }
  : T extends "image"
    ? { src: string | StaticImageData; alt: string; width: number; height: number; children: CustomText[] }
    : {};
