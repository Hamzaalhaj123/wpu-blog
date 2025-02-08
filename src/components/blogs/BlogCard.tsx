import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shared/card";
import StarsRating from "@/components/shared/StarsRating";
import Directional from "@/components/utils/Directional";
import routes from "@/config/routes";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import { SelectUserModel } from "@/db/schemas/userTable";
import { Link } from "@/lib/next-intl/navigation";
import WithClassName from "@/types/withClassName";
import cn from "@/utils/cn";
import { format } from "date-fns";
import { ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type BlogCardProps = WithClassName<SelectBlogModel & { author: SelectUserModel }>;

export default function BlogCard({
  author,
  title,
  id,
  thumbnail,
  description,
  createdAt,
  rating,
  readingTime,
  className,
}: BlogCardProps) {
  const blogUrl = routes.blog.id(id);
  const t = useTranslations("GENERAL");
  return (
    <Card asChild className={cn("relative flex flex-col overflow-hidden", className)}>
      <article>
        <CardHeader className="p-0">
          <Link href={blogUrl}>
            <Image src={thumbnail} alt={title} width={768} height={288} className="h-60 object-cover" />
          </Link>
          <CardTitle className="p-4">{title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-auto">
          {rating ? (
            <div className="flex items-center justify-between">
              <StarsRating rating={rating} />
              <p className="text-secondary">{rating.toPrecision(2)}</p>
            </div>
          ) : null}
          <p className="mb-3 line-clamp-3 text-muted-foreground">{description}</p>
          <p className="pt-3 text-lg">{t("minute", { count: readingTime })}</p>
        </CardContent>
        <CardFooter>
          <AvatarGroup name={author.name} image={author.avatar} />
          <div>
            <div className="font-medium">{author.name}</div>
            <time className="text-muted-foreground">{format(createdAt, "yyyy")}</time>
          </div>
          <Button asChild className="ms-auto gap-2">
            <Link href={blogUrl}>
              <span>Read</span>
              <Directional>
                <ChevronRightIcon size={20} className="transition-transform group-hover:translate-s-2" />
              </Directional>
            </Link>
          </Button>
        </CardFooter>
      </article>
    </Card>
  );
}
