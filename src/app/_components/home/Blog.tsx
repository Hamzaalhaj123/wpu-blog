import { Button } from "@/app/_components/shared/Button";
import { CameraIcon } from "lucide-react";
import Image from "next/image";
import ThumbNail from "/public/imageThumbnail.webp";
export default function Blog() {
  return (
    <div className="bg-[#ffff]">
      <Image src={ThumbNail} alt="PlaceHolder" />
      <div className="flex justify-center">
        <Button>
          <CameraIcon size={24} />
        </Button>
      </div>
    </div>
  );
}
