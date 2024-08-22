import { blogs } from "@/mockData/blogs";
import { Blog } from ".";

export default function BlogsFeed() {
  return (
    <div className="3xl:grid-cols-4 grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
  );
}
