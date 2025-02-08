import AvatarGroup from "@/components/shared/AvatarGroup";
import Button from "@/components/shared/Button";
import StarsRating from "@/components/shared/StarsRating";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import { SelectTagModel } from "@/db/schemas/tagTable";
import { SelectUserModel } from "@/db/schemas/userTable";
import { Link } from "@/lib/next-intl/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

type BlogHeroProps = {
  blog: SelectBlogModel;
  author: SelectUserModel;
  tags: SelectTagModel[];
};

export default function BlogHero({ blog, author, tags }: BlogHeroProps) {
  const t = useTranslations("GENERAL");

  return (
    <section className="relative mb-8">
      <Image src={blog.thumbnail} priority fill alt="placeholder title" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 size-full bg-gradient-to-t from-background from-25% to-background/20" />
      <div className="relative mx-auto max-w-2xl pt-64">
        <h1 className="mb-8 text-5xl font-bold">{blog.title}</h1>
        <div className="mb-4 flex items-center justify-between gap-16">
          <div className="grid grid-cols-[auto_1fr] items-center gap-x-2 whitespace-nowrap">
            <AvatarGroup className="row-span-2" image={author.avatar} name={author.name} />
            <div className="shrink-0">{author.name}</div>
            <div>{t("minute", { count: blog.readingTime })} Read</div>
          </div>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <Button key={tag.id} size="extraSmall" pill asChild>
                <Link href="#">#{tag.name}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">{blog.rating ? <StarsRating rating={blog.rating} /> : null}</div>
      </div>
    </section>
  );
}
