import { CustomElement } from "@/types/richTextEditor";
import Image from "next/image";
import { RenderElementProps } from "slate-react";

export default function ImageElement({ element, attributes, children }: RenderElementProps) {
  const { alt, src, height, width } = element as CustomElement<"image">;

  return (
    <div {...attributes} className={``}>
      <Image src={src} alt={alt} width={width} height={height} />
      {children}
    </div>
  );
}
