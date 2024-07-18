import Image from "next/image";
import React from "react";
import ThumbNail from "/public/imageThumbnail.webp";
export default function Blog() {
  return (
    <div className="bg-primary">
      <Image src={ThumbNail} alt="PlaceHolder" />
      Blog
    </div>
  );
}
