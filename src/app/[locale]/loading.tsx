import BlogSkeleton from "@/components/blogs/BlogSkeleton";

export default function loading() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <BlogSkeleton key={index} />
        ))}
    </div>
  );
}
