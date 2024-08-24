import delay from "@/lib/delay";
import { blogs } from "@/mockData/blogs";

export default async function getBlogs() {
  await delay(2000);

  return blogs;
}
