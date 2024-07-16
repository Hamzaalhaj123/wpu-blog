import Image from "next/image";
import React from "react";
import ThumbNail from "/public/imageThumbnail.webp";
export default function Blog() {
  return (
    <div className="bg-slate-900">
      <Image src={ThumbNail} alt="PlaceHolder" />
      Blog
    </div>
  );
}
