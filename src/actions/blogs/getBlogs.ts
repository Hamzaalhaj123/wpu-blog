import delay from "@/utils/delay";
import { blogs } from "@/mock/blogs";

export default async function getBlogs() {
  await delay(2000);

  return blogs;
}
