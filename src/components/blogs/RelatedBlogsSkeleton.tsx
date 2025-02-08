import BlogSkeleton from "@/components/blogs/BlogCardSkeleton";
import { Skeleton } from "@/components/shared/Skeleton";

export default function RelatedBlogsSkeleton() {
  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-5 w-8 rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    </>
  );
}
