import Image from "next/image";
import React from "react";
import ThumbNail from "/public/imageThumbnail.webp";
import { Button } from "@/app/_components/shared/Button";
import { CameraIcon } from "lucide-react";
export default function Blog() {
  return (
    <div className="bg-[#ffff]">
      <Image src={ThumbNail} alt="PlaceHolder" />
      <div className="flex justify-center">
        <Button variant="ghost" shape={"circle"} colour={"warning"}>
          <CameraIcon size={24} />
        </Button>
      </div>
    </div>
  );
}
