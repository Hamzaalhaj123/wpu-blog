import getBlogById from "@/actions/blogs/getBlogById";
import BlogComments from "@/components/blogs/BlogComments";
import BlogHero from "@/components/blogs/BlogHero";
import BlogHeroSkeleton from "@/components/blogs/BlogHeroSkeleton";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import Await from "@/components/utils/Await";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

type PageProps = { params: { id: string }; searchParams: string[] };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const [t, { blog, author }] = await Promise.all([getTranslations("METADATA.blog"), getBlogById(+params.id)]);

  return {
    title: t("title", { title: blog.title }),
    description: blog.description,
    authors: [{ name: author.name }],
  };
}

export default async function BlogPage({ params }: PageProps) {
  const blogId = +params.id;
  return (
    <>
      <Suspense fallback={<BlogHeroSkeleton />}>
        <Await promise={getBlogById(blogId)}>
          {({ blog, author, tags }) => (
            <>
              <BlogHero blog={blog} author={author} tags={tags} />
              <section className="mx-auto max-w-2xl pb-16">{blog.content}</section>
            </>
          )}
        </Await>
      </Suspense>
      <div className="mx-auto max-w-2xl pb-16">
        <BlogComments blogId={blogId} />
        <RelatedBlogs blogId={blogId} />
      </div>
    </>
  );
}
