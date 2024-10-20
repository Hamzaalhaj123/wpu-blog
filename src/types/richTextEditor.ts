export type FontSize = "xs" | "sm" | "md" | "lg" | "xl";

export type Format = "bold" | "italic" | "underline" | "strikethrough";

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ElementType = "paragraph" | "code" | Heading;

export type CustomElement = { type: ElementType; children: CustomText[]; fontSize?: FontSize };

export type CustomText = { text: string; formats?: Format[] };
