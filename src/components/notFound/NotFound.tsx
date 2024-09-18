import Button from "@/components/shared/Button";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import notFound from "/public/images/not-found.webp";

type NotFoundProps = {
  title: string;
  label: string;
};
// #TODO replace not found image with a proper one
export default function NotFound({ title, label }: NotFoundProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Image src={notFound} alt={title} className="size-52" />
      <Button asChild variant="link">
        <Link href={routes.index}>{label}</Link>
      </Button>
    </div>
  );
}
