import { Blog } from ".";
import getBlogs from "@/app/_actions/blogs/queries/getBlogs";

export default async function BlogsFeed() {
  const blogs = await getBlogs();
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  );
}
