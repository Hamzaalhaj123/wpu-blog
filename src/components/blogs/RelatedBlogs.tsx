import getRelatedBlogsByBlogId from "@/actions/blogs/getRelatedBlogsByBlogId";
import BlogCard from "@/components/blogs/BlogCard";
import RelatedBlogsSkeleton from "@/components/blogs/RelatedBlogsSkeleton";
import { Badge } from "@/components/shared/Badge";
import Await from "@/components/utils/Await";
import { SelectBlogModel } from "@/db/schemas/blogTable";
import { Suspense } from "react";

type RelatedBlogsProps = {
  blogId: SelectBlogModel["id"];
};

export default function RelatedBlogs({ blogId }: RelatedBlogsProps) {
  
  return (
    <section>
      <Suspense fallback={<RelatedBlogsSkeleton />}>
        <Await promise={getRelatedBlogsByBlogId(blogId)}>
          {(blogs) => (
            <>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-medium">
                Related blogs <Badge>{blogs.length}</Badge>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} className="h-full" {...blog} />
                ))}
              </div>
            </>
          )}
        </Await>
      </Suspense>
    </section>
  );
}
