import getBlogs from "@/actions/blogs/getBlogs";
import Blog from "@/components/blogs/Blog";

export default async function BlogsFeed() {
  const blogs = await getBlogs();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {blogs.slice(0, 7).map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  );
}
