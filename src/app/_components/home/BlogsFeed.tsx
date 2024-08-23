import { blogs } from "@/mockData/blogs";
import { Blog } from ".";

export default function BlogsFeed() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  );
}
