import { Button } from "@/app/_components/shared/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ThumbNail from "/public/imageThumbnail.webp";
export default function Blog() {
  const t = useTranslations("HOMEPAGE");
  return (
    <div className="bg-[#ffff]">
      <Image src={ThumbNail} alt="PlaceHolder" />
      <div className="flex justify-center">
        <Button>{t("test")}</Button>
      </div>
    </div>
  );
}
